import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/api";

export default function Paymentdetails() {
  /* const Subscribers = [
    {
      id: 1,
      name: "John",
      email: "john.doe@gmail.com",
      Domain: "Full stack",
      Plan: "15 days - Rs.199",
      Transaction_id: "...yxy768",
      status: "Accepted",
    },
    {
      id: 2,
      name: "Robert",
      email: "Robertrdj5@gmail.com",
      Domain: "UI & UX",
      Plan: "60 days - Rs.399",
      Transaction_id: "...xxy112",
      status: "Pending",
    },
    {
      id: 3,
      name: "Mike",
      email: "Mikemike00@gmail.com",
      Domain: "Mern stack",
      Plan: "30 days - Rs.299",
      Transaction_id: "...yxx665",
      status: "Completed",
    },
    {
      id: 4,
      name: "jagadeesh",
      email: "jagdee122@gmail.com",
      Domain: "AI & ML",
      Plan: "90 days - Rs.499",
      Transaction_id: "...xyx879",
      status: "Requested",
    },
    {
      id: 5,
      name: "afsar ali",
      email: "afsarallah@gmail.com",
      Domain: "Robotics",
      Plan: "15 days - Rs.199",
      Transaction_id: "...yxx770",
      status: "Completed",
    },
    {
      id: 6,
      name: "hariharan",
      email: "harihari333@gmail.com",
      Domain: "Mern stack",
      Plan: "60 days - Rs.399",
      Transaction_id: "...yyxx070",
      status: "Requested",
    },
    {
      id: 7,
      name: "siva",
      email: "sivasamy@gmail.com",
      Domain: "Full stack",
      Plan: "30 days - Rs.299",
      Transaction_id: "...yYx153",
      status: "Pending",
    },
    {
      id: 8,
      name: "karthi",
      email: "karthikaka90@gmail.com",
      Domain: "AI & ML",
      Plan: "60 days - Rs.499",
      Transaction_id: "...yXy223",
      status: "Completed",
    },

  ]; */
  const [Subscribers,setSubscribers] = useState([])
  const [filterStatus, setFilterStatus] = useState("All");
  const handleAccept = async(id)=>
  {
    try
    {
      const res = await api.put(`/acceptIntern/${id}`);
      console.log(id);
      
      
      
    }
    catch(err)
    {
      console.log(err); 
    }

  }

  const handleRemove = async(id)=>
  {
    try
    {
      const res = await api.put(`/rejectIntern/${id}`);
      console.log(res);
    }
    catch(err)
    {
      console.log(err)

    }
  }

/*   const [subscription, setSubscription] = useState(Subscribers);
 */
/*   const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  

  const handleDelete = (id) => {
    // handle delete logic
    if (window.confirm("Are you sure you want to Remove!?")) {
    console.log("Deleted service with ID: ${id}");
    setSubscription((Handle) => Handle.filter((payment) => payment.id !== id)
    
    )
}
  };
  const handleRemove = (id) => {
    // handle delete logic
    if (window.confirm("Are you sure you want to Remove!?")) {
    console.log("Deleted service with ID: ${id}");
    setSubscription((Handle) => Handle.filter((payment) => payment.id !== id)
    
    )
}
  }; */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/getInterns');
        console.log(res);
        setSubscribers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const filteredServices = (() => {
    switch (filterStatus) {
        case "All":
            return Subscribers;
        case "Pending":
            return Subscribers.filter(payment => payment.verification === "Pending");
        case "Accepted":
            return Subscribers.filter(payment => payment.verification === "Accepted");
        default:
            return []; 
    }
})();


  return (
    <div className="bg-[#FAF2BE] mx-auto h-full h-screen p-10 ">
      <div className="mb-4">
        <select
          value={filterStatus}
         /*  onChange={handleStatusChange} */
          className="p-2 border border-gray-300 rounded"
        >
          <option value="All">All</option>
          <option value="Accepted">Accepted</option>
          <option value="Requested">Requested</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <table className="w-full h-fit border border-gray-300">
        <thead className="bg-light-yellow text-dark-blue">
          <tr>
            <th className="py-2 px-4 border-b">S.No</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Domain</th>
            <th className="py-2 px-4 border-b">Plan</th>
            <th className="py-2 px-4 border-b">Transaction_id</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((payment, index) => (
            <tr key={payment._id} className="bg-dark-blue text-white">
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b text-center text-justify pl-12"> {payment.user && payment.user.email ? payment.user.email : ''}</td>
              <td className="py-2 px-4 border-b text-center text-justify pl-16">{payment.user.email}</td>
              <td className="py-2 px-4 border-b text-center text-justify pl-12">{payment.domain?.title}</td>
              <td className="py-2 px-4 border-b text-center text-light-yellow">
  {payment.internshipType === 1 ? '199' : payment.internshipType === 2 ? '399' : payment.internshipType === 3 ? '599' : '799'}
</td>
              <td className="py-2 px-4 border-b text-center">{payment.transactionId}</td>
              <td className="py-2 px-4 border-b text-center text-light-yellow text-justify pl-10">{payment.verification}</td>
              <td className="py-2 px-4 border-b text-center">
                {payment.status !== "Completed" && (
                  <div>
                    {payment.status !== "Accepted" && (
                      <button
                        onClick={() => handleAccept(payment._id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      >
                        Accept
                      </button>
                    )}
                    <button
                     /*  onClick={() => {handleRemove(payment.id)}} */
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {payment.status === "Completed" && (
                  <button
                   /*  onClick={() => {handleDelete(payment.id)}} */
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                )}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}