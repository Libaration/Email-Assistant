import "./Template.style.css"
const Template = () => {
  return (
    <div className='container text-black no-drag'>
      <div className='lotView online grid'>
        <div className='lot-title font-bold text-center text-primary text-[30px] whitespace-nowrap text-ellipsis border-b border-[#ebebeb] pt-[20px] mb-[20px]'>
          <h1>529 N Brice St. Baltimore, MD 21223</h1>
        </div>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </div>
    </div>
  );
};
export default Template;
