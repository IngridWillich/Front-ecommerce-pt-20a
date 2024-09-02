import { ILoginError, ILoginProps,ISignUpProps,ISignUpError } from "@/interfaces";

export function validateLoginForm(values:ILoginProps):ILoginError{
const errors:ILoginError = {}
if (!values.email) {
    errors.email = "Email is required";
} else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = "Invalid email format";
}

if (!values.password) {
    errors.password = "Password is required";
}

return errors;
}

export function validateSignUpForm(values: ISignUpProps): ISignUpError {
    const errors: ISignUpError = {};

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    if (!values.name) {
        errors.first_name = "Name is required";
    }


    if (!values.phone) {
        errors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(values.phone)) {
        errors.phone = "Phone number must be 11 digits long";
    }

    if (!values.address) {
        errors.address = "Address is required";
    }
       

    return errors;
}
