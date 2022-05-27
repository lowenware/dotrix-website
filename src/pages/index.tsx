import { NextPage } from "next";
import Head from "next/head";
import { PageLayout, BlogPosts, Button } from "components";
import GitHubIcon from "icons/logo-github.svg";
import { Blog, BlogPostRaw, mapBlogPostRawToMeta } from "utils/blog";
import { DOCS_URL_ROOT } from "utils/docs";
import { PAGES } from "utils/pages";

interface HomepageProps {
  posts: BlogPostRaw[];
}
const MAX_BLOG_POSTS = 8;
const Home: NextPage<HomepageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{PAGES.HOME.title}</title>
      </Head>
      <PageLayout currentPage="HOME">
        <div className="flex flex-col">
          <div className="home__image w-full h-screen  lg:h-60vh bg-fixed items-center justify-center bg-no-repeat">
            <div className="bg-opacity-70 flex flex-col bg-black-100 h-screen lg:h-60vh bg-fixed w-full">
              <section className="my-auto">
                <div>
                  <p className="text-white text-48 md:text-72 mb-24 text-center mt-64 lg:mt-0">
                    Program your world
                  </p>
                  <p className="text-white text-18 md:text-24 mb-64 text-center">
                    OpenSource 3D engine for Rust developers
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row self-center w-2/3 mx-auto justify-center mb-64">
                  <Button
                    href={`${DOCS_URL_ROOT}/get-started`}
                    className="mb-4 sm:mb-0 sm:mr-36"
                    variant="primary"
                  >
                    GET STARTED
                  </Button>
                  <Button href="/" variant="outline" className="mb-10 sm:mb-0">
                    <GitHubIcon className="mr-32" />
                    <p className="text-white text-18 sm:text-24 font-bold">
                      GITHUB
                    </p>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
        <BlogPosts
          posts={posts.map(mapBlogPostRawToMeta)}
          className="bg-black-800 w-full px-32 -mt-32"
        />
        <section className="w-full bg-black-800 flex justify-center">
          <div className="max-w-7xl grid md:gap-32 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 mb-64">
            <div className="flex flex-col pt-64 px-32 sm:pl-32">
              <p className="text-white font-bold text-24 mb-12">
                Performance and Safety
              </p>
              <p className="text-white">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
            </div>

            <div className="flex flex-col pt-64 px-32 sm:pr-32">
              <p className="text-white font-bold text-24 mb-12">
                ECS Programming pattern
              </p>
              <p className="text-white">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn&apos;t anything embarrassing hidden in the middle
                of text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet
              </p>
            </div>
            <div className="flex flex-col pt-8 px-32 sm:pl-32">
              <p className="text-white font-bold text-24 mb-12">
                Crossplatform
              </p>
              <p className="text-white">
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>
            <div className="flex flex-col pt-8 px-32 sm:pr-32">
              <p className="text-white font-bold text-24 mb-12">OpenSource </p>
              <p className="text-white">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    posts: new Blog().getRawBlogPosts(MAX_BLOG_POSTS),
  },
});

export default Home;
