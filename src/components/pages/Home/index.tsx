import { useForm, Yup, yupResolver, FormProvider } from "../../atoms/Form";
import React from "react";
import FormInput from "../../atoms/Form/RHInput";
import CheckboxInput from "../../atoms/Form/RHCheckbox";
import { Email_Valid } from "../../atoms/regexes";
import { useDispatch, useSelector } from "react-redux";
import { setPageData } from "../../../redux/action";
import { useRouter } from "next/router";
import axios from "axios";

const AddSchema = Yup.object().shape({
  name: Yup.string()?.required("Enter your full name"),
  email: Yup.string()
    ?.required("Enter your email address")
    .matches(Email_Valid, "Please enter invalid email"),
  age: Yup.number()
    ?.required("Enter your age")
    .max(100, "Age must be between 18 and 100")
    .min(18, "Age must be between 18 and 100"),
});

const Index = () => {
  const router = useRouter();
  const pageData = useSelector(({ pageData }: any) => pageData);
  const dispatch = useDispatch();
  const defaultValues = {
    name: "",
    email: "",
    age: "",
    newsletter: false,
  };

  const methods = useForm({
    resolver: yupResolver(AddSchema),
    defaultValues,
  });

  const onSubmit = async (data: typeof defaultValues) => {
    const configheaders = {
      headers: {
        Authorization: `Bearer TOKEN`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "/api/", //اینجا باید ادرس api باشه
        JSON.stringify({
          username: data,
        }),
        configheaders
      )
      .then(function (res) {})
      .catch(function (error) {});

    const js = pageData?.users || [];
    js.push(data);
    //در قسمت زیر در ریداکس ذخیره میکنم
    dispatch(
      setPageData({
        ...pageData,
        users: js,
      })
    );
    router.push("./Home/Table");
  };
  return (
    <FormProvider methods={methods}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Add user
        </h2>
      </div>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-4 space-y-4"
      >
        <FormInput label="Name" name="name" type="text" />
        <FormInput label="Email" name="email" type="text" />
        <FormInput label="Age" name="age" type="number" />
        <CheckboxInput label="Newsletter Subscription" name="newsletter" />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
export default Index;
