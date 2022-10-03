export const EOM = ({ employee }) => {
  return (
    <div className="#">
      <h1>Employee Of The Month</h1>
      <h2>{employee.name}</h2>
      <h4>{employee.position}</h4>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;

// export const getServerSideProps = async (pageContext) => {
//     const apiResponse = await fetch(
//       "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
//     );

//     const employee = await apiResponse.json();
//     return {
//       props: {
//         employee,
//       },
//     };
//   };
