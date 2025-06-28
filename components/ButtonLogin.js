import Link from "next/link";

// This button is to log in the user
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  //   const person = { name: "Bob", age: 25 };
  //   const { name, age } = person; // Object destructuring

  //   const { isLoggedIn, name } = props;

  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary  ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  }

  return <button>Login</button>;
};

export default ButtonLogin;
