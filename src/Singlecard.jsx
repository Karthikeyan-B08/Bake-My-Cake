import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Box, TextField } from "@mui/material";

export default function Singlecard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const { id } = useParams();
  const [sc, setSc] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cakes?id=${id}`)
      .then((res) => {
         console.log("Fetched cake:", res.data);
        setSc(res.data[0]);
      })
      .catch((err) => console.error("Error fetching cake:", err));
  }, [id]);

  const onSubmit = (data) => {
    const order = {
      ...data,
      cakeId: id,
      cakeName: sc?.name,
      price: sc?.price,
    };

    axios
      .post("http://localhost:5000/orders", order)
      .then(() => {alert("Successfully placed order")
        reset();
       })
      .catch(() => alert("Order not placed"));
  };

  // 🧠 Prevent rendering before data is available
  if (!sc) {
    return <h2>Loading cake details...</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Left Side - Cake Details */}
      <div style={{ flex: 1 }}>
        <div className="card mb-3">
          <img src={sc.image.startsWith("http")  ? sc.image  : `${window.location.origin}/${sc.image}`} className="card-img-top" alt={sc.name} />
          <div className="card-body">
            <h5 className="card-title">{sc.title}</h5>
            <p className="card-text">{sc.description}</p>

            <h5 className="card-title">Delivery Information</h5>
            <p className="card-text">
              <ul>
                <li>
                  Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing, there might be slight variation in design and shape.
                </li>
                <li>
                  Since cakes are perishable in nature, we attempt delivery only once. The delivery cannot be redirected.
                </li>
              </ul>
            </p>

            <h5 className="card-title">Care Instructions</h5>
            <p className="card-text">
              <ul>
                <li>Store cream cakes in a refrigerator.</li>
                <li>Fondant cakes should be stored in an air-conditioned environment.</li>
                <li>Slice and serve at room temperature.</li>
                <li>Consume within 24 hours.</li>
              </ul>
            </p>

            <p className="card-text">
              <small className="text-body-secondary">Last updated just now</small>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Order Form */}
      <div style={{ flex: 1, marginLeft: "40px" }}>
        <h3>{sc.name}</h3>
        <h4>Rating: {sc.rating}</h4>
        <h4>Price: ₹{sc.price}</h4>

        <h2>Fill details to place the order</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            autoComplete="off"
          >
            <TextField
              id="fname"
              label="First Name"
              variant="filled"
              {...register("fname", {
                required: "First name is required",
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "Name must contain only letters",
                },
              })}
              error={!!errors.fname}
              helperText={errors.fname ? errors.fname.message : ""}
            />

            <TextField
              id="lname"
              label="Last Name"
              variant="filled"
              {...register("lname", {
                required: "Last name is required",
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "Name must contain only letters",
                },
              })}
              error={!!errors.lname}
              helperText={errors.lname ? errors.lname.message : ""}
            /> <br></br>


            <TextField
              id="email"
              label="e-mail"
              variant="filled"
              {...register("email", {
                required: "email name is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />

            <TextField
              id="phone"
              label="Mobile no"
              variant="filled"
              {...register("phone", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: " must contain only digits",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ""}
            /> <br></br>

             <TextField
                id="addr"
                label="Address"
                variant="filled"
                multiline          // 👈 makes it a multi-line text box
                rows={4}           // 👈 sets the height (number of visible lines)
                fullWidth          // 👈 optional: makes it stretch to container width
                {...register("addr", {
                required: "Address is required",
                pattern: {
                value: /^[A-Za-z0-9\s,.\-#/()']+$/,
                message: "Invalid Address",
                },
                })}
                error={!!errors.addr}
                helperText={errors.addr ? errors.addr.message : ""}
                />


            <TextField
              id="city"
              label="City"
              variant="filled"
              {...register("city", {
                required: "City is required",
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "City must contain only letters",
                },
              })}
              error={!!errors.city}
              helperText={errors.city ? errors.city.message : ""}
            /><br></br>

            <TextField
              id="state"
              label="State"
              variant="filled"
              {...register("state", {
                required: "State is required",
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "State contain only letters",
                },
              })}
              error={!!errors.state}
              helperText={errors.state ? errors.state.message : ""}
            /> 

            <TextField
              id="zip"
              label="Zip Code"
              variant="filled"
              {...register("zip", {
                required: "Zip Code is required",
                pattern: {
                  value: /^[0-9 ]+$/,
                  message: "Zip Code must contain only digits",
                },
              })}
              error={!!errors.zip}
              helperText={errors.zip ? errors.zip.message : ""}
            /><br></br>

            <TextField
              id="date"
              label="Delivery Date"
              variant="filled"
              {...register("date", {
                required: "Date is required",
                pattern: {

                 value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/,
                  message: "Date must be in DD/MM/YYY format",
                },
              })}
              error={!!errors.date}
              helperText={errors.date ? errors.date.message : ""}
            /> 


            <TextField
            id="pname"
            label="Product Name"
            variant="filled"
            defaultValue={sc.name}   
            {...register("pname", {
            required: "Product Name is required",
             pattern: {
            value: /^[A-Za-z ]+$/,
            message: "Name must contain only letters and spaces",
            },
            })}
             error={!!errors.pname}
            helperText={errors.pname ? errors.pname.message : ""}
             /><br></br>

            <TextField
              id="qty"
              label="Quantity"
              variant="filled"
              defaultValue={1} 
              {...register("qty", {
                required: "Quantity is required",
                pattern: {
                  value: /^[0-9 ]+$/,
                  message: "Quantity must contain only digits",
                },
              })}
              error={!!errors.qty}
              helperText={errors.qty ? errors.qty.message : ""}
            /> 

             <TextField
              id="id"
              label="Id"
              variant="filled"
              defaultValue={sc.id} 
              {...register("id", {
                required: "Id is required",
                pattern: {
                  value: /^[0-9 ]+$/,
                  message: "Id must contain only digits",
                },
              })}
              error={!!errors.id}
              helperText={errors.id ? errors.id.message : ""}
            /> 

          </Box>
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
}

