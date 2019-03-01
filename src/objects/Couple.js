import Icon from "../assets/images/icon.png";
import "../Utility";

class Couple {
  constructor(
    brideFirstName,
    groomFirstName,
    countdownImg,
    weddingLocation,
    weddingDate
  ) {
    this.brideFirstName = brideFirstName;
    this.groomFirstName = groomFirstName;
    this.countdownImg = countdownImg;
    this.weddingLocation = weddingLocation;
    this.weddingDate = weddingDate;
  }

  static sampleCouple = () => {
    return new Couple(
      "Mr.",
      "Mrs.",
      Icon,
      "Month / Day /Year",
      "Wedding Venue TBD"
    );
  };

  static createCoupleFromObject = couple => {
    console.log(couple);
    if (couple.countdown) {
      let date = new Date(couple.countdown.wedding_date);
      var dateString =
        date.toLocaleString("en-us", { month: "long" }) +
        " " +
        date.getDate() +
        "," +
        " " +
        date.getFullYear();
      let imagePath = Icon;
      if (couple.countdown.img.path) {
        imagePath = couple.countdown.img.path;
      }

      var location = "";
      if (couple.countdown.weddingLocation) {
        location = couple.countdown.weddingLocation;
      } else {
        location = "Wedding Venue TBD";
      }
      return new Couple(
        couple.countdown.name1.toLowerCase().capitalize(),
        couple.countdown.name2.toLowerCase().capitalize(),
        imagePath,
        location,
        dateString
      );
    } else {
      return Couple.sampleCouple();
    }
  };
}

export default Couple;



// WEBPACK FOOTER //
// ./src/objects/Couple.js