import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import google from '../../assets/google.svg';
import { register as registerUser } from '../../store/auth/reducer';

const schema = yup.object().shape({
  userName: yup.string().required('Name is required'),
  userPhone: yup
    .string()
    .matches(/^\+?\d{7,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
  userEmail: yup.string().email('Invalid email').required('Email is required'),
  userPassword: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  userConfigPass: yup
    .string()
    .oneOf([yup.ref('userPassword')], 'Passwords must match')
    .required('Confirm password is required'),
});

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
	const user = {
          userName: data.userName,
          phoneNumber: data.userPhone,
          email: data.userEmail,
          password: data.userPassword,
          confirmPassword: data.userConfigPass,
        }
    try {
      await dispatch(
        registerUser(user)
      ).unwrap();
      navigate('/logIn');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <section className="flex items-center justify-center md:h-[90vh] py-[50px] md:py-[0]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] md:w-[400px] flex flex-col gap-3 px-4"
      >
        <b className="text-[35px] md:text-[42px]">Create an account</b>
        <p className="text-[18px] md:text-[20px] -mt-2">Enter your details below</p>

        {Object.values(errors).length > 0 && (
          <div className="border border-red-400 text-red-700 px-4 py-2 rounded mb-2 text-sm">
            <ul className="list-disc list-inside space-y-1">
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}

        <input
          {...register('userName')}
          placeholder="Name"
          className="rounded border border-gray-400 p-2 outline-none"
        />
        <input
          {...register('userPhone')}
          placeholder="Phone Number"
          className="rounded border border-gray-400 p-2 outline-none"
        />
        <input
          {...register('userEmail')}
          placeholder="Email"
          type="email"
          className="rounded border border-gray-400 p-2 outline-none"
        />
        <input
          {...register('userPassword')}
          placeholder="Password"
          type="password"
          className="rounded border border-gray-400 p-2 outline-none"
        />
        <input
          {...register('userConfigPass')}
          placeholder="Confirm Password"
          type="password"
          className="rounded border border-gray-400 p-2 outline-none"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#DB4444] text-white rounded p-2 mt-2"
        >
          {isSubmitting ? 'Creating...' : 'Create Account'}
        </button>

        <button
          type="button"
          className="py-2 border border-gray-400 rounded flex items-center justify-center gap-2 mt-3"
        >
          <img src={google} alt="google" />
          Sign up with Google
        </button>

        <p className="text-center mt-3">
          Already have an account?{' '}
          <Link to="/logIn" className="font-bold underline">
            Log in
          </Link>
        </p>
      </form>
    </section>
  );
}
