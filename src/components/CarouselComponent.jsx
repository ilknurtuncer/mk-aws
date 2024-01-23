
import { Carousel } from 'flowbite-react';

function Component() {
  return (
    <div className=" relative h-96  ">
       <Carousel pauseOnHover>
       
        <img src="https://www.govconwire.com/wp-content/uploads/2023/09/unnamed-file-62.png" alt="..." />
       
        <img src="https://cdn.sanity.io/images/tlr8oxjg/production/6c256248d79b3083336ab1e12f42ccde7e42b56c-1198x672.png?w=3840&q=80&fit=clip&auto=format" alt="..." />
        <img src="https://cdn.sanity.io/images/tlr8oxjg/production/f30df485d2531da30e61564cb87f8f92f95ca742-1198x672.png?w=3840&q=80&fit=clip&auto=format" alt="..." />
      </Carousel>
    </div>
  );
}

export default Component;

