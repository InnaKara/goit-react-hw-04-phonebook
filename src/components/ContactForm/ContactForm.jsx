import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Btn,
  ErrorMes,
  FieldName,
  FieldNumber,
  LabelName,
  LabelNumber,
  StyledForm,
} from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This field is required!'),
  number: Yup.string()
    .matches(/^\d+$/, 'The number must contain only numbers')
    .min(10, 'Minimum number length - 10 digits')
    .max(15, 'Maximum number length - 15 digits')
    .required('This field is required!'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <LabelName htmlFor="name">
            Name
            <FieldName type="text" name="name" required />
            <ErrorMes name="name" component="div" />
          </LabelName>
          <LabelNumber htmlFor="number">
            Number
            <FieldNumber type="tel" name="number" required />
            <ErrorMes name="number" component="div" />
          </LabelNumber>
          <Btn type="submit">Add contact</Btn>
        </StyledForm>
      </Formik>
    </div>
  );
};
