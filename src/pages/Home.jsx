import {
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import Header from "../ui/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-secondary-0">
      {/* Hero Section */}
      <section className="container xl:max-w-screen-xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-5xl font-black text-secondary-900">
            پلتفرم فریلنسینگ حرفه‌ای
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl">
            با ما به راحتی پروژه‌های خود را به فریلنسرهای حرفه‌ای بسپارید یا به
            عنوان فریلنسر در پروژه‌های مختلف شرکت کنید
          </p>
          <div className="flex gap-4">
            <Link to="/auth" className="btn btn--primary">
              شروع کنید
            </Link>
            <Link to="/auth" className="btn btn--outline">
              مشاهده پروژه‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary-50 py-16">
        <div className="container xl:max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">
            چرا ما را انتخاب کنید؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-0 p-6 rounded-xl shadow-sm">
              <HiOutlineBriefcase className="w-12 h-12 text-primary-900 mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                پروژه‌های متنوع
              </h3>
              <p className="text-secondary-600">
                دسترسی به هزاران پروژه متنوع در حوزه‌های مختلف
              </p>
            </div>
            <div className="bg-secondary-0 p-6 rounded-xl shadow-sm">
              <HiOutlineUserGroup className="w-12 h-12 text-primary-900 mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                فریلنسرهای حرفه‌ای
              </h3>
              <p className="text-secondary-600">
                ارتباط با فریلنسرهای متخصص و با تجربه
              </p>
            </div>
            <div className="bg-secondary-0 p-6 rounded-xl shadow-sm">
              <HiOutlineCurrencyDollar className="w-12 h-12 text-primary-900 mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                پرداخت امن
              </h3>
              <p className="text-secondary-600">
                سیستم پرداخت امن و تضمین شده برای همه طرفین
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container xl:max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <HiOutlineUserGroup className="w-12 h-12 text-primary-900 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                ۱۰۰۰+
              </h3>
              <p className="text-secondary-600">فریلنسر فعال</p>
            </div>
            <div>
              <HiOutlineBriefcase className="w-12 h-12 text-primary-900 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                ۵۰۰۰+
              </h3>
              <p className="text-secondary-600">پروژه انجام شده</p>
            </div>
            <div>
              <HiOutlineCurrencyDollar className="w-12 h-12 text-primary-900 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                ۱۰۰M+
              </h3>
              <p className="text-secondary-600">درآمد پرداختی</p>
            </div>
            <div>
              <HiOutlineChartBar className="w-12 h-12 text-primary-900 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                ۹۸٪
              </h3>
              <p className="text-secondary-600">رضایت مشتریان</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-secondary-100 py-8">
        <div className="container xl:max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© ۱۴۰۳ تمامی حقوق محفوظ است</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                to="/about"
                className="hover:text-primary-500 transition-colors"
              >
                درباره ما
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary-500 transition-colors"
              >
                تماس با ما
              </Link>
              <Link
                to="/terms"
                className="hover:text-primary-500 transition-colors"
              >
                قوانین
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
