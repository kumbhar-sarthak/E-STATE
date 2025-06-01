import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ScrollingWrapper.css";

const ScrollingWrapper = () => {
  const scrollingContentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.registerPlugin(ScrollTrigger);

      let contain = gsap.context(() => {
        const scrollingContent = scrollingContentRef.current;

        function getScrollAmount() {
          return scrollingContent.scrollWidth - window.innerWidth;
        }

        const scrollTween = gsap.to(scrollingContent, {
          x: -getScrollAmount(),
          ease: "none",
          duration: 4,
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          animation: scrollTween,
          pin: true,
          scrub: 1,
          markers: false,
          snap: {
            snapTo: "labels",
            duration: 2,
            delay: 0,
            ease: "power1.inOut",
          },
          invalidateOnRefresh: true,
        });

        ScrollTrigger.refresh();
      });

      return () => contain.revert();
    } else {
      document.querySelector(".scrolling-wrapper").style.overflowX = "hidden";
    }
  }, []);

  return (
    <>
      <div className="scrolling-wrapper" ref={containerRef}>
        <div
          className="scrolling-content"
          id="scrollingContent"
          ref={scrollingContentRef}
        >
          <div className="scrolling-item item-1">
            <div className="w-screen h-screen font-sans overflow-x-hidden">
              <div className="p-6 pl-8 font-semibold items">
                <div className="text-9xl text-gray-300 font-bold">01</div>
                <div className="pl-8">
                  <div className="text-2xl pt-12">Set Your Goals & Budget</div>
                  <div className="pt-5">
                    Before investing in real estate, define your objectives and
                    financial capacity. Determine whether you are buying for
                    rental income, long-term appreciation, or personal use, and
                    assess your budget accordingly.
                  </div>
                  <div className="pt-10">
                    <p className="p-5 ">
                      The first step in real estate investment is understanding
                      why you want to invest. Are you looking for a long-term
                      asset that appreciates over time, a rental property for
                      monthly income, or a home for personal use? Answering this
                      question will help you decide the type of property that
                      best suits your needs. Next, evaluate your finances.
                      Consider your savings, existing debts, credit score, and
                      loan eligibility. Decide how much you can invest upfront
                      and how much you may need to borrow. Keep in mind
                      additional costs such as down payment, taxes, maintenance,
                      and registration fees. Having a clear financial picture
                      will help you set realistic expectations and avoid
                      financial strain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scrolling-item item-2">
            <div className="w-screen h-screen font-sans overflow-x-hidden">
              <div className="p-6 pl-8 font-semibold items">
                <div className="text-9xl text-gray-300 font-bold">02</div>
                <div className="pl-8">
                  <div className="text-2xl pt-12">Research the Market</div>
                  <div className="pt-5">
                    Thorough market research is crucial to making informed
                    decisions. Analyze property trends, location potential, and
                    real estate laws to ensure a profitable investment.
                  </div>
                  <div className="pt-10">
                    <p className="p-5 ">
                      Real estate values can fluctuate depending on economic
                      conditions, demand-supply balance, and development
                      projects in a given location. Start by researching areas
                      with high growth potential, good infrastructure, and
                      strong rental demand. Look at historical price trends and
                      future projections to understand whether the investment is
                      likely to appreciate. Additionally, learn about government
                      policies, property taxes, and legal requirements that
                      might affect your investment. Understanding the local
                      rental market can help you estimate expected rental income
                      if you plan to lease the property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scrolling-item item-3">
            <div className="w-screen h-screen font-sans overflow-x-hidden">
              <div className="p-6 pl-8 font-semibold items">
                <div className="text-9xl text-gray-300 font-bold">03</div>
                <div className="pl-8">
                  <div className="text-2xl pt-12"> Secure Financing</div>
                  <div className="pt-5">
                    Understanding your financing options is key to a smooth
                    investment. Compare self-funding, mortgage loans, and other
                    financial strategies to determine the best way to fund your
                    purchase.
                  </div>
                  <div className="pt-10">
                    <p className="p-5 ">
                      Once you have set a budget, explore financing options. You
                      can purchase a property through self-funding, bank loans,
                      private lenders, or investment partnerships. If you plan
                      to take a loan, ensure your credit score is high to
                      qualify for better interest rates. Compare loan options
                      from multiple lenders to get the best deal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scrolling-item item-4">
            <div className="w-screen h-screen font-sans overflow-x-hidden">
              <div className="p-6 pl-8 font-semibold items">
                <div className="text-9xl text-gray-300 font-bold">04</div>
                <div className="pl-8">
                  <div className="text-2xl pt-12">
                    Find & Evaluate Properties
                  </div>
                  <div className="pt-5">
                    Choosing the right property involves evaluating its
                    location, future appreciation potential, and legal status.
                    Inspect properties thoroughly before making a decision.
                  </div>
                  <div className="pt-10">
                    <p className="p-5 ">
                      After securing finances, the next step is to identify and
                      shortlist properties. Look for properties in locations
                      that align with your investment goals. Factors such as
                      proximity to schools, hospitals, and public transport can
                      affect property value and rental demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scrolling-item item-5">
            <div className="w-screen h-screen font-sans overflow-x-hidden">
              <div className="p-6 pl-8 font-semibold items">
                <div className="text-9xl text-gray-300 font-bold">05</div>
                <div className="pl-8">
                  <div className="text-2xl pt-12">
                    {" "}
                    Close the Deal & Manage Your Investment
                  </div>
                  <div className="pt-5">
                    Finalizing the property purchase involves legal paperwork,
                    registration, and effective management to ensure long-term
                    profitability.
                  </div>
                  <div className="pt-10">
                    <p className="p-5 ">
                      Once you have selected a property, it’s time to finalize
                      the deal. This involves signing agreements, completing
                      legal documentation, and registering the property in your
                      name. After purchase, decide on how you will manage your
                      investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollingWrapper;
