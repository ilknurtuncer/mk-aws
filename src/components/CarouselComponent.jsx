import { Carousel } from 'flowbite-react';

function Component() {
  return (
    <div className=" relative h-96  ">
      <Carousel className='text-white' leftControl="left" rightControl="right">
        <img src="https://static.fnac-static.com/multimedia/Images/FD/Comete/164179/CCP_IMG_ORIGINAL/2178029.jpg" alt="..." />
        <img src="https://www.govconwire.com/wp-content/uploads/2023/09/unnamed-file-62.png" alt="..." />
        <img src="https://www.dertreasurer.de/fileadmin/user_upload/Cloud_Finanzabteilung_FINANCE_Ar__TH_stock.adobe.com_507662376.jpg" alt="..." />
        <img src="https://cdn.sanity.io/images/tlr8oxjg/production/6c256248d79b3083336ab1e12f42ccde7e42b56c-1198x672.png?w=3840&q=80&fit=clip&auto=format" alt="..." />
        <img src="https://cdn.sanity.io/images/tlr8oxjg/production/f30df485d2531da30e61564cb87f8f92f95ca742-1198x672.png?w=3840&q=80&fit=clip&auto=format" alt="..." />
      </Carousel>
    </div>
  );
}

export default Component;

