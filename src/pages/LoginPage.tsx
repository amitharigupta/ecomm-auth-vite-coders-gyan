import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { login } from '@/http/api'
import { useMutation } from '@tanstack/react-query'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate()

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log('Login Successfully');
      navigate('/dashboard/home');
    }
  })

  const loginHandler = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);

    if (!email || !password) {
      return alert('Please enter your email and password');
    }
    mutation.mutate({ email, password });
    // make server call.
  }

  return (
    <section className='flex justify-center items-center h-screen'>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input ref={emailRef} id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <div className='w-full'>
            <Button className="w-full" onClick={loginHandler}>Login</Button>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to={"/auth/register"} className="underline">
                Register
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>

    </section>
  )
}

export default LoginPage
