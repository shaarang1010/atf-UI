import { fireEvent, render, screen } from "@testing-library/react";
import LoginComponent from "./Login";

describe("Renders Login Component ", () => {
  
  let objectLogin = {
    userEmail:"abcdefg@gmail.com",
    userPassword:"abcdefghijklmnopq"
  }
  const mockFn = jest.fn();

  beforeEach(() => {
    render(
    <LoginComponent
      userEmail={objectLogin.userEmail}
      userPassword={objectLogin.userPassword}
      setUserEmail={mockFn}
      setUserPassword={mockFn}
      forgotPassword={false}
      setForgotPassword={mockFn}
      createAccount={mockFn}
      loginUser={mockFn}
    />);
  });

  test("renders email adress and password label and input", () => {
    expect(screen.queryByText('Email address')).toBeInTheDocument();
    expect(screen.queryByText('Password')).toBeInTheDocument();
    expect(document.getElementById('email')).toBeTruthy();
    expect(document.getElementById('password')).toBeTruthy();
  })

  
  test("email address value must be a string", () => {
    const el = document.getElementById('email') as HTMLInputElement;
    expect(typeof el.value).toBe('string')
  })

  test("password value must be a string", () => {
    const el = document.getElementById('password') as HTMLInputElement;
    expect(typeof el.value).toBe('string')
  })

});

describe("Tesing functions called", () => {
  let objectLogin = {
    userEmail:"abcdefg@gmail.com",
    userPassword:"abcdefghijklmnopq"
  }
  const setUserEmail = jest.fn();
  const setUserPassword = jest.fn();
  const setForgotPassword = jest.fn();
  const createAccount = jest.fn();
  const loginUser = jest.fn();

  beforeEach(() => {
    render(
    <LoginComponent
      userEmail={objectLogin.userEmail}
      userPassword={objectLogin.userPassword}
      setUserEmail={setUserEmail}
      setUserPassword={setUserPassword}
      forgotPassword={false}
      setForgotPassword={setForgotPassword}
      createAccount={createAccount}
      loginUser={loginUser}
    />);
  });

  test("typing on email would trigger setUserEmail", () =>{
    const el = document.getElementById('email' ) as HTMLInputElement;
    const event = {target: {value:'abc@gmail.com'}} 
    fireEvent.input(el, event);
    expect(setUserEmail).toHaveBeenCalled()
  })

  test("typing on password would trigger setUserPassword", () =>{
    const el = document.getElementById('password' ) as HTMLInputElement;
    const event = {target: {value:'123'}} 
    fireEvent.input(el, event);
    expect(setUserPassword).toHaveBeenCalled()
  })

  test("clicking on login triggers loginUser", () =>{
    const el = screen.getByText('Login') 
    fireEvent.click(el);
    expect(loginUser).toHaveBeenCalled()
  })

  test("clicking on create account triggers create account", () =>{
    const el = screen.getByText('Create Account') 
    fireEvent.click(el);
    expect(createAccount).toHaveBeenCalled()
  })

})
