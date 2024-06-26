import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { YAMATO_SYMBOL } from '../../../constants/yamato';
// import { useActiveWeb3React } from '../../../hooks/web3';
// import { useRepayCallback } from '../../../hooks/yamato/useRepayCallback';
// import { subtractToNum } from '../../../utils/bignumber';
// import { errorToast } from '../../../utils/errorToast';
// import {
//   formatCollateralizationRatio,
//   formatPrice,
// } from '../../../utils/prices';
import { CustomButton, CustomFormLabel, CustomInput } from '../../CommonItem';
import { formatCollateralizationRatio, formatPrice } from 'lib/utils/prices';
import { subtractToNum } from 'lib/utils/bignumber';

type Props = {
  collateral: number;
  debt: number;
  rateOfEthJpy: number;
  cjpy: number;
};

export default function RepayInput(props: Props) {
  const { collateral, debt, rateOfEthJpy, cjpy } = props;

  const { account } = useActiveWeb3React();
  const { callback } = useRepayCallback();

  const [repayment, setRepayment] = useState<number | ''>();

  const { t } = useTranslation();

  const validateRepayment = useCallback(
    (value: number | '') => {
      if (!account || !callback) {
        return t('pledge.debt.alert1');
      }

      if (!value) {
        setRepayment(value);
        return;
      }
      if (value > debt) {
        return t('pledge.debt.alert5');
      }
      if (value > cjpy) {
        return t('pledge.debt.alert6');
      }

      // Value is correct
      setRepayment(value);
      return undefined;
    },
    [account, debt, cjpy, t, callback]
  );

  const submitRepayment = useCallback(
    async (
      values: { repayment: number | '' },
      formikHelpers: FormikHelpers<{
        repayment: number | '';
      }>
    ) => {
      console.debug('submit repayment', values);

      if (!values.repayment) {
        return;
      }

      try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const res = await callback!(values.repayment);
        console.debug('repayment done', res);
      } catch (error) {
        errorToast(error);
      }

      // reset
      setRepayment('');
      formikHelpers.resetForm();
    },
    [callback]
  );

  return (
    <Formik
      initialValues={{ repayment: '' as number | '' }}
      onSubmit={submitRepayment}
    >
      {(formikProps) => (
        <Form>
          <VStack>
            <HStack
              spacing={4}
              align={
                formikProps.errors.repayment && formikProps.touched.repayment
                  ? 'center'
                  : 'end'
              }
            >
              <Field name="repayment" validate={validateRepayment}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={!!formikProps.errors.repayment}
                    style={{ maxWidth: '200px' }}
                  >
                    <CustomFormLabel
                      htmlFor="repayment"
                      text={t('pledge.debt.repaymentAmountInput')}
                    />
                    <HStack>
                      <CustomInput
                        {...field}
                        id="repayment"
                        type="number"
                        placeholder={YAMATO_SYMBOL.YEN}
                        data-testid="borrowing-data-repayAmount"
                      />
                      {debt > 0 && cjpy > 0 && (
                        <Button
                          variant="outline"
                          size="xs"
                          style={{ marginLeft: '5px' }}
                          onClick={() => {
                            const value = Math.min(debt, cjpy);
                            form.setFieldValue('repayment', value);
                          }}
                        >
                          MAX
                        </Button>
                      )}
                    </HStack>
                    <FormErrorMessage>
                      {formikProps.errors.repayment}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <CustomButton
                isLoading={formikProps.isSubmitting}
                type="submit"
                data-testid="borrowing-act-repay"
                isDisabled={!repayment}
              >
                {t('pledge.debt.repaymentExecution')}
              </CustomButton>
            </HStack>
            {repayment && repayment > 0 && (
              <VStack>
                <CustomFormLabel
                  text={`${t('pledge.debt.predictedFluctuation')} ${formatPrice(subtractToNum(debt, repayment), 'jpy').value
                    } ${YAMATO_SYMBOL.YEN}`}
                />
                <CustomFormLabel
                  text={`${t(
                    'pledge.debt.collateralRate'
                  )} ${formatCollateralizationRatio(
                    collateral * rateOfEthJpy,
                    debt - repayment
                  )}%`}
                />
              </VStack>
            )}
          </VStack>
        </Form>
      )}
    </Formik>
  );
}

//// TODO: Please remove this snippet and add the correct code snippet
function useActiveWeb3React(): { account: any; } {
  return { account: null };
}

function errorToast(error: unknown) {
  return;
}

function useRepayCallback(): { callback: any; } {
  return { callback: null };
}