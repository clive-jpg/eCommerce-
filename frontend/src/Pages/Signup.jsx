import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupThunk } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="App">
        <div class="container-fluid ps-md-0">
          <div class="row g-0">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-9 col-lg-8 mx-auto">
                      <h3 class="login-heading mb-4">
                        Welcome Back, Please Sign in
                      </h3>
                      <Form>
                        <FormGroup floating>
                          <Input
                            id="name"
                            name="name"
                            placeholder="name"
                            type="name"
                            onChange={handleChange}
                          />
                          <Label for="name">Name</Label>
                        </FormGroup>{" "}
                        <FormGroup floating>
                          <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Email"
                            type="email"
                            onChange={handleChange}
                          />
                          <Label for="exampleEmail">Email</Label>
                        </FormGroup>{" "}
                        <FormGroup floating>
                          <Input
                            name="phonenumber"
                            placeholder="Phone Number"
                            type="number"
                            onChange={handleChange}
                          />
                          <Label for="phonenumber">Phone Number</Label>
                        </FormGroup>{" "}
                        <FormGroup floating>
                          <Input
                            name="password"
                            placeholder="Password"
                            type="password"
                            onChange={handleChange}
                          />
                          <Label for="examplePassword">Password</Label>
                        </FormGroup>{" "}
                        <Button
                          style={{ padding: "14px 20px", margin: "0 10px" }}
                          onClick={() =>
                            dispatch(signupThunk(credentials)).then(() =>
                              navigate("/login")
                            )
                          }
                        >
                          Submit
                        </Button>
                        <Button style={{ padding: "14px 30px" }} onClick={()=> navigate("/login")}>
                          Already have an account
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
