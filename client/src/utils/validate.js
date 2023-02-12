import * as Yup from 'yup';
import i18n from "i18next";



export const validationRegisterSchema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Please enter valid email')
        .required(i18n.t('validation.required'))
    ,
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    kvkk: Yup.boolean()
        .required("Kvkk text confirm required")
});

export const registerSync = {
    async validator({ field }, value) {
        await validationRegisterSchema.validateSyncAt(field, { [field]: value });
    }
};


export const validationLoginSchema= Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email')
        .required(i18n.t('validation.required'))
        .label('Email'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required(i18n.t('validation.required'))
        .label('Password'),
});

export const loginSync = {
    async validator({ field }, value) {
        await validationLoginSchema.validateSyncAt(field, { [field]: value });
    }
};
