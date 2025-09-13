
const DescriptionData = {
  getBaseConditionDescription: () => {
    return 'Please see the photos for this item\'s condition and send us a message if you have questions or would like clarification.';
  },

  getConditionDescriptionFor: (item: string) => {
    return `This card has a ${item.toLowerCase()}.`;
  }
};

export default DescriptionData;