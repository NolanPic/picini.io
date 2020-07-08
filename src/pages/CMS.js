import React from "react";
import cmsGif from "../images/cms.gif";
import BackBtn from "../components/BackBtn";

const CMS = () => {
  return (
    <div className="cms page">
      <section>
        <h1>Content Management System</h1>
        <img className="walkthrough" src={cmsGif} alt="CMS walkthrough" />

        <p>
          I worked at EfinityTech (a small web development company) where we
          developed our own CMS. VSM is a robust content management system for
          the company's clients. We would build websites for our clients on this
          platform so that a client could log in and manage/update their
          website.
        </p>

        <p>
          I have worked on probably every area of this CMS to a degree, but here
          are some highlights for which I was largely responsible:
        </p>

        <ul>
          <li>
            Developed a new page content editor that allows a user to edit their
            website content directly on the page
          </li>
          <li>
            Built a blogging system into the CMS, with a "module" that could be
            dropped into any website page to turn it into a blog with its own
            template
          </li>
          <li>
            Many aspects of the ecommerce section--features for managing
            products, categories, reviews, editing in bulk, etc., etc.
          </li>
        </ul>

        <p>
          Technologies used included:
          <br />
          Vanilla JS, jQuery, Vue, Bootstrap, C#, ASP.NET Web Forms/Web API, SQL
          Server, Windows Server
        </p>
      </section>

      <BackBtn />
    </div>
  );
};

export default CMS;
