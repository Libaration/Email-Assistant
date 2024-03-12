const Newsletter = ({ children }) => {
  return (
    <>
      <body>
        <tbody>
          <tr>
            <td
              className='fusionResponsiveCanvas'
              style={{
                width: '100%',
                paddingTop: '15px',
                paddingBottom: '15px',
                backgroundColor: 'rgb(243, 243, 243)',
                backgroundRepeat: 'no-repeat',
                fontFamily: 'Roboto, sans-serif',
              }}
            />
            {children}
          </tr>
        </tbody>
      </body>
    </>
  );
};
export default Newsletter;
