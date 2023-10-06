import { useForm } from 'react-hook-form';

export function Form() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name..." {...register('fullName')} />
            <input type="text" placeholder="Email..." {...register('email')} />
            <input type="number" placeholder="Age..." {...register('age')} />
            <input type="password" placeholder="Password..." {...register('password')} />
            <input type="password" placeholder="Confirm password..." {...register('confirmPassword')} />
            <input type="submit" />
        </form>
    );
}
