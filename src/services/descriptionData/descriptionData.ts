
const DescriptionData = {
  getBaseConditionDescription: () => {
    return 'Please see the photos for this item\'s condition and send us a message if you have questions or would like clarification.';
  },

  getConditionDescriptionFor: (item: string) => {
    return `This card has a ${item.toLowerCase()}.`;
  },

  getDescription: () => {
    return `<p><span style="color: rgb(52, 52, 52); font-family: Courier; font-size: large;"><b>Save on shipping when you buy multiple cards.</b></span></p><p><span style="color: rgb(52, 52, 52); font-family: Courier; font-size: large;">Explore our full postcard collection. Any</span><font color="#343434" face="Courier" size="4">&nbsp;additional eligible cards added to your cart and purchased together will automatically receive a shipping discount at checkout.</font></p><p><span style="color: rgb(52, 52, 52); font-family: Courier; font-size: large;"><br></span></p><p><strong style="color: rgb(52, 52, 52); font-family: Courier; font-size: large;">Rest assured that your postcards will be packed with care and shipped quickly.</strong></p><p><span style="font-size: large;"><font color="#343434" face="Courier"><u>eBay Standard Envelope Service</u>&nbsp;is available for up to 3 cards under $20 and is shipped in a protective sleeve and semi-rigid envelope. Please note tracking with this service is limited and may show your parcel as delivered when it reaches your local post office before it is delivered to you.&nbsp;</font></span></p><p><span style="font-size: large;"><font color="#343434" face="Courier"><u><br></u></font></span></p><p><span style="font-size: large;"><font color="#343434" face="Courier"><u>USPS Ground Advantage</u>&nbsp;is available if you'd like additional protection and tracking or for postcards over $20. Cards will be shipped with a wrapped hard plastic top loader in a small box.</font></span></p><p><span style="font-size: large;"><font color="#343434" face="Courier"><u><br></u></font></span></p><p><span style="color: rgb(52, 52, 52); font-family: Courier; font-size: large;">Be sure to follow our store for future listings and sales as we post unique finds every week. We appreciate your business and are happy to share these little pieces of history with you.</span></p><p><span style="font-size: large;"><font color="#343434" face="Courier"><br></font></span></p><p></p><p><span style="font-size: large;"><font color="#343434" face="Courier"><strong>Thank you for stopping by August Vintage!</strong></font></span></p><!-- notionvc: c1556d3e-9cb5-4dd0-ad19-0d8471e10b38 -->`;
  },
};

export default DescriptionData;