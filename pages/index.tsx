import type { NextPage } from "next";
import Main from "../components/Main/Main";
import BaseLayout from "../components/shared/layouts/BaseLayout/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className="w-full">
        <Main />
      </div>
    </BaseLayout>
  );
};

export default Home;
