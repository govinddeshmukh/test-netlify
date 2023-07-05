import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import {login} from "../Features/userSlice"
  import {useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
   
  export default function Register() {
    const [username, setusername] = useState("")
    const dispathc = useDispatch()
        
    return (
        <div className="p-10 w-full h-screen flex items-center justify-center">

      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
          Register
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Username" onChange={(e)=> setusername(e.target.value)} size="lg" />
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <Input label="Confirm Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to='/'>
          <Button onClick={()=>dispathc(login(username))} variant="gradient" fullWidth>
            Sign In
          </Button>
          </Link>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
                <Link to='/login'>
              Sign in

                </Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
              </div>
    );
  }