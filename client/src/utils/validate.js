import * as Yup from 'yup';

export const validationRegisterSchema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
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

export const validationLoginSchema= Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
        .label('Email'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required')
        .label('Password'),
});


export const yupSync = {
    async validator({ field }, value) {
        await validationRegisterSchema.validateSyncAt(field, { [field]: value });
    },
};
