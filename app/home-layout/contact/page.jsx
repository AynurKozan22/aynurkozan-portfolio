import Head from "next/head";
import dynamic from "next/dynamic";
import SidebarInfo from "@/components/about/SidebarInfo";
import HeaderNavigation from "@/components/header/HeaderNavigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/contact/ContactForm";
import AddressTwo from "@/components/contact/AddressTwo";

export const metadata = {
  title: "Contact || Aynur Kozan - Personal Portfolio",
};
const index = () => {
  return (
    <section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      {/* End Head for Seo */}

      <Header />

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
          <SidebarInfo />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <HeaderNavigation />

          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div data-aos="fade">
              <div className="container mb-8  px-4 sm:px-5 md:px-10 lg:px-[60px]">
                <div className="pt-12">
                  <h2 className="after-effect after:left-48 mt-12  lg:mt-0 mb-12 md:mb-[30px]">
                    Contact
                  </h2>

                  <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-[40px] grid gap-x-5 gap-y-7">
                    <AddressTwo />
                  </div>

                  <ContactForm />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
