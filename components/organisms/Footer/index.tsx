/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';
import Col from './Col';
import { listCompany, listSupport, listConnect } from './data';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/#" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <Col headerText={listCompany.headerText} items={listCompany.items} />
                <Col headerText={listSupport.headerText} items={listSupport.items} />
                <Col headerText={listConnect.headerText} items={listConnect.items} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
