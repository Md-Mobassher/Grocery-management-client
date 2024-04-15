import Title from "@/components/common/Title";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: Record<string, string>) => {
    try {
      console.log(data);
      // await emailjs.send("service_6ioyfyn", "template_vcxutb8", data, {
      //   publicKey: "KYzXXSYc5Sml-ySqX",
      // });
      toast.success("Successfully Contacted.");
      reset();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(`FAILED to Contact... ${err.message}`);
      } else {
        toast.error("FAILED to Contact...");
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-5 lg:px-3 md:px-6 px-4 pb-10">
      <Title title="Get In Touch" />
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-stretch gap-5 text-center">
        <div className=" flex flex-col justify-stretch items-center gap-5 border rounded-lg lg:p-8 md:p-6 p-4 bg-green-50">
          <FaLocationDot className="size-16 text-green-400" />
          <h3 className="text-lg font-semibold">
            Tograihat, Rajarhat, Kurigram, Bangladesh-5600.
          </h3>
        </div>
        <div className=" flex flex-col justify-stretch items-center gap-5 border rounded-lg lg:p-8 md:p-6 p-4  bg-green-50">
          <FiPhoneCall className="size-16 text-green-400" />
          <h3 className="text-lg font-semibold">+88 01706060647</h3>
        </div>
        <div className=" flex flex-col justify-stretch items-center gap-5 border rounded-lg lg:p-8 md:p-6 p-4  bg-green-50">
          <TfiEmail className="size-16 text-green-400" />
          <h3 className=" text-lg font-semibold">
            mdmobassherhossain1@gmail.com
          </h3>
        </div>
      </div>

      <div className="flex justify-center mb-8 lg:mt-20 md:mt-16 mt-6">
        <Title title="Contact Us" />
      </div>
      <div className="max-w-3xl lg:px-20 lg:py-12 md:px-16 md:py-10  p-6 rounded-lg mx-auto  border  bg-green-50">
        <div className="">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-primary w-full"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors?.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {"Name is Required"}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full mt-5">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered input-primary w-full"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {"Email is Required"}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {"Provide a valid Email"}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full mt-5">
                <Input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered p-5 w-full "
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Subject is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.subject?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {"Subject is Required"}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full mt-5">
                <textarea
                  placeholder="Your Message"
                  className="p-5 border rounded-lg  w-full"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.message?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {"Message is Required"}
                    </span>
                  )}
                </label>
              </div>

              <div className="flex  justify-center hover:text-white mt-5">
                <input
                  className=" bg-green-400 hover:bg-green-500 transition-all duration-300 px-20 py-3 rounded-lg border-0 text-center text-white "
                  type="submit"
                  value="Contact"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
