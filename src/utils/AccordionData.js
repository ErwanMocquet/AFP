import { Link } from "react-router-dom";

export const accordionData = [
    {
      title: 'Before you get tattoed',
      content:<div> Before coming to get your tattoo, we advise you to:<br></br>
      - Get a good night's sleep<br></br>
      - To come with a full stomach<br></br>
      - DO NOT drink alcohol the day before<br></br>
      - Do not take aspirin or pills alike for 24/48 hours
         before you get tattooed<br></br>
      - Shower and moisturize your skin<br></br>
      </div>
    },
    {
      title: 'Aftercare',
      content: <div>After you got your tattoo, we advise you to:<br></br>
      - Wash the area daily, it's very important that the area stays clean to allow you skin to heal correctly.<br></br>
      - Keep your skin moisturize, at least 2 to 3 times a day. You should apply a cream with high fat percentage to let the skin heal and avoid it to scab.<br></br>
      - Protect the tattoo form the sun. Apply sunscreen on your tattoo if it can be in direct contact with sunlight.<br></br>
      - It's usually taking the skin 2 to 3 weeks to heal completely (may differ regarding the size and the area), so take good care of it during this period!</div>
    },
    {
      title: 'Hygiene at the studio',
      content: <div>I use disinfectant / germicidal cleaning products throughout the studio and protect my tools and furniture with correct and approved disposable protection covers, thus reducing the risk of cross-contamination, ensuring that your tattoo is not affected by what and who I have been working with before.`</div>
    },
    {
        title: 'How to get in touch?',
        content: <div>If you want to contact me, to talk about one of your projects or to set a meeting, You can click on this <Link to='/contact' className="link-care">link</Link>!</div>
    },
  ];