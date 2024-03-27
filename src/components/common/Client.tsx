import client1 from "../../assets/clients/client-1.png";
import client2 from "../../assets/clients/client-2.png";
import client3 from "../../assets/clients/client-3.png";
import client4 from "../../assets/clients/client-4.png";

const clients = [client1, client2, client3, client4, client1];

const Client = () => {
  return (
    <div className=" max-w-7xl mx-auto my-5" id="client">
      <h1 className="text-2xl font-bold text-center">OUR CLIENTS</h1>
      <div className=" py-5">
        <div className="flex gap-5 justify-between ">
          {clients &&
            clients.map((client) => (
              <div className="">
                <img className="" src={client} alt="" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
