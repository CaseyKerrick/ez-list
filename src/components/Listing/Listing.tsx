import React from 'react';
import Radio from '../base/Radio/Radio';
import TextField from '../base/TextField/TextField';
import SearchDropdown from '../base/SearchDropdown/SearchDropdown';
import DropdownData from '../../services/dropdownData/dropdownData';
import DescriptionData from '../../services/descriptions/descriptionData';
import Checklist from '../base/Checklist/Checklist';
import Toggle from '../base/Toggle/Toggle';
import TextArea from '../base/TextArea/TextArea';
import DisplayText from '../base/DisplayText/DisplayText';
import './Listing.css';
import DateTime from '../base/DateTime/DateTime';
import Button from '../base/Button/Button';
import { FormContext, FormContextType } from '../../FormContext';


function Listing() {

  const FormData = React.useContext(FormContext) as FormContextType;

  const [scheduleListingDateTime, setScheduleListingDateTime] = React.useState({ date: '', time: '', amPm: 'AM' });
  const decade = /[0-9][0-9][0-9]/.exec(FormData.yearManufactured.value) || [];

  React.useEffect(() => {
    const descrip = [...FormData.conditionTypes.value.map(DescriptionData.getConditionDescriptionFor), DescriptionData.getBaseConditionDescription()].join('\n');
    FormData.conditionDescription.set(descrip);
  }, [FormData.conditionTypes.value, FormData.conditionDescription]);

  const submitForm = () => {
    alert('Listing has been submitted!');
  };

  return (
    <form>
      <div className='formQuestion'>
        <TextField 
          characterLimit={80}
          title='Title'
          value={FormData.title.value}
          onChange={FormData.title.set}
          width={700}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='templateType'
          radioButtons={['Topographical', 'Non-Topographical']}
          title='Template Type'
          selected={FormData.templateType.value}
          onChange={FormData.templateType.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          characterLimit={50}
          title='Custom Label (SKU)'
          value={FormData.customLabelSKU.value}
          onChange={FormData.customLabelSKU.set}
          width={150}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Store Category 1'
          dropdownItems={DropdownData.getStoreCategories()}
          enableSearch={true}
          strict={true}
          value={FormData.storeCategory1.value}
          onChange={FormData.storeCategory1.set}
          required={true}
          width={400}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Store Category 2'
          dropdownItems={DropdownData.getStoreCategories()}
          enableSearch={true}
          strict={true}
          value={FormData.storeCategory2.value}
          onChange={FormData.storeCategory2.set}
          required={true}
          width={400}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='UPC Number'
          value={FormData.upc.value}
          onChange={FormData.upc.set}
          width={150}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Occasion'
          priorityItems={DropdownData.getOccasionsPriority()}
          dropdownItems={DropdownData.getOccasions()}
          enableSearch={true}
          value={FormData.occasion.value}
          onChange={FormData.occasion.set}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='City'
          value={FormData.city.value}
          onChange={FormData.city.set}
          suggestions={['Chicago', 'New York City', 'San Francisco']}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Subject'
          value={FormData.subject.value}
          onChange={FormData.subject.set}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Country/Region of Manufacture'
          dropdownItems={DropdownData.getCountriesRegionsOfManufacture()}
          enableSearch={true}
          strict={true}
          value={FormData.countryRegionOfManufacture.value}
          onChange={FormData.countryRegionOfManufacture.set}
          priorityItems={DropdownData.getMostCommonCountries()}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Country'
          priorityItems={DropdownData.getMostCommonCountries()}
          dropdownItems={DropdownData.getCountries()}
          enableSearch={true}
          value={FormData.country.value}
          onChange={FormData.country.set}
          strict={false}
          default={FormData.countryRegionOfManufacture.value}
        />
      </div>
      <div className='formQuestion'>
        { FormData.country.value === 'United States' &&
          <SearchDropdown
            title='Region'
            dropdownItems={DropdownData.getUsStates()}
            enableSearch={true}
            strict={true}
            value={FormData.region.value}
            onChange={FormData.region.set}
          />
        }
        { FormData.country.value !== 'United States' &&
          <TextField
            title='Region'
            value={FormData.region.value}
            onChange={FormData.region.set}
            disabled={!FormData.country.value}
          />
        }
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Theme'
          priorityItems={DropdownData.getPriorityThemes()}
          dropdownItems={DropdownData.getThemes()}
          enableSearch={true}
          value={FormData.theme.value}
          onChange={FormData.theme.set}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Unit of Sale'
          dropdownItems={DropdownData.getUnitsOfSale()}
          enableSearch={false}
          value={FormData.unitOfSale.value}
          onChange={FormData.unitOfSale.set}
          strict={true}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Type'
          dropdownItems={DropdownData.getTypes()}
          enableSearch={true}
          value={FormData.postcardType.value}
          onChange={FormData.postcardType.set}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='originalOrLicensedReprint'
          radioButtons={['Original', 'Licensed Reprint']}
          title='Original/Licensed Reprint'
          selected={FormData.originalOrLicensedReprint.value}
          onChange={FormData.originalOrLicensedReprint.set}
          required={false}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='postageCondition'
          radioButtons={['Posted', 'Unposted']}
          title='Postage Condition'
          selected={FormData.postageCondition.value}
          onChange={FormData.postageCondition.set}
          required={false}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Era'
          dropdownItems={['Divided Back (1907-1915)', 'Undivided Back (1901-1917)']}
          enableSearch={true}
          value={FormData.era.value}
          onChange={FormData.era.set}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Year Manufactured'
          value={FormData.yearManufactured.value}
          onChange={FormData.yearManufactured.set}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Number of Items in Set'
          value={FormData.numberOfItemsInSet.value}
          onChange={FormData.numberOfItemsInSet.set}
          suggestions={['1']}
        />
      </div>
      <div className='formQuestion'>
        <Checklist
          title='Features'
          checklistItems={DropdownData.getFeatures()}
          selected={FormData.features.value}
          onChange={FormData.features.set}
        />
      </div>
      <div className='formQuestion'>
        <Checklist
          title='Material'
          checklistItems={DropdownData.getMaterials()}
          selected={FormData.material.value}
          onChange={FormData.material.set}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Continent'
          dropdownItems={DropdownData.getContinents()}
          enableSearch={false}
          value={FormData.continent.value}
          onChange={FormData.continent.set}
          strict={true}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Brand/Publisher'
          dropdownItems={DropdownData.getCommonPublishers()}
          enableSearch={true}
          value={FormData.brandOrPublisher.value}
          onChange={FormData.brandOrPublisher.set}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Franchise'
          value={FormData.franchise.value}
          onChange={FormData.franchise.set}
          suggestions={['Disney']}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Occasion'
          value={FormData.occasion2.value}
          onChange={FormData.occasion2.set}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Character'
          value={FormData.character.value}
          onChange={FormData.character.set}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Signed'
          value={FormData.signed.value}
          onChange={FormData.signed.set}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Signed By'
          value={FormData.signedBy.value}
          onChange={FormData.signedBy.set}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Personalize'
          value={FormData.personalize.value}
          onChange={FormData.personalize.set}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Personalization Instructions'
          value={FormData.personalizationInstructions.value}
          onChange={FormData.personalizationInstructions.set}
          disabled={!FormData.personalize.value}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Artist'
          value={FormData.artist.value}
          onChange={FormData.artist.set}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Featured Person'
          value={FormData.featuredPerson.value}
          onChange={FormData.featuredPerson.set}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Size'
          value={FormData.size.value}
          onChange={FormData.size.set}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Time Period Manufactured'
          value={FormData.timePeriodManufactured.value}
          onChange={FormData.timePeriodManufactured.set}
          default={decade.length > 0 ? `${decade[0]}0-${decade[0]}9` : ''}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='California Prop 65 Warning'
          value={FormData.californiaProp65Warning.value}
          onChange={FormData.californiaProp65Warning.set}
          characterLimit={800}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Unit Quantity'
          value={FormData.unitQuantity.value}
          onChange={FormData.unitQuantity.set}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Unit Type'
          dropdownItems={DropdownData.getUnitTypes()}
          enableSearch={true}
          value={FormData.unitType.value}
          onChange={FormData.unitType.set}
          strict={true}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='condition'
          radioButtons={['New', 'Used']}
          title='Condition'
          selected={FormData.condition.value}
          onChange={FormData.condition.set}
        />
      </div>
      <div className='formQuestion'>
        <Checklist
          title='Condition Types'
          checklistItems={['Tear', 'Crease', 'Bend', 'Pinhole']}
          selected={FormData.conditionTypes.value}
          onChange={FormData.conditionTypes.set}
        />
      </div>
      <div className='formQuestion'>
        <TextArea
          title='Condition Description'
          value={FormData.conditionDescription.value}
          onChange={FormData.conditionDescription.set}
          characterLimit={1000}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <DisplayText
          title='Description'
          value={DescriptionData.getDescription()}
          parseHtml={true}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='format'
          radioButtons={['Buy It Now', 'Auction']}
          title='Format'
          selected={FormData.format.value}
          onChange={FormData.format.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Price'
          value={FormData.price.value}
          onChange={FormData.price.set}
          suggestions={['5.95', '15.95', '19.95']}
          currency={true}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Require Immediate Payment'
          value={FormData.requireImmediatePayment.value}
          onChange={FormData.requireImmediatePayment.set}
          disabled={true}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Quantity'
          value={FormData.quantity.value}
          onChange={FormData.quantity.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='paymentPolicy'
          radioButtons={['BIN Immediate Payment', 'No Immediate Pay - Auction']}
          title='Payment Policy'
          selected={FormData.paymentPolicy.value}
          onChange={FormData.paymentPolicy.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Allow Offers'
          value={FormData.allowOffers.value}
          onChange={FormData.allowOffers.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Minimum Offer'
          value={FormData.minimumOffer.value}
          onChange={FormData.minimumOffer.set}
          currency={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Auto Accept'
          value={FormData.autoAccept.value}
          onChange={FormData.autoAccept.set}
          currency={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Schedule Your Listing?'
          value={FormData.scheduleListing.value}
          onChange={FormData.scheduleListing.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <DateTime
          title='Schedule Your Listing'
          required={true}
          value={scheduleListingDateTime}
          onChange={setScheduleListingDateTime}
          disabled={!FormData.scheduleListing.value}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='auctionDuration'
          radioButtons={['7 Days', '10 Days']}
          title='Duration'
          selected={FormData.duration.value}
          onChange={FormData.duration.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Starting Bid'
          value={FormData.startingBid.value}
          onChange={FormData.startingBid.set}
          currency={true}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Buy It Now Price (Optional)'
          value={FormData.buyItNowPrice.value}
          onChange={FormData.buyItNowPrice.set}
          currency={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Buy It Now Price (Optional)'
          value={FormData.buyItNowPrice.value}
          onChange={FormData.buyItNowPrice.set}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Auto Relist'
          value={FormData.autoRelist.value}
          onChange={FormData.autoRelist.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='shippingPolicy'
          radioButtons={['Shipping Postcards Under $20', 'Shipping Postcards Over $20']}
          title='Shipping Policy'
          selected={Number.parseFloat(FormData.price.value) >= 20 ? 'Shipping Postcards Over $20' : 'Shipping Postcards Under $20'}
          onChange={FormData.shippingPolicy.set}
          required={true}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Package Weight (oz)'
          value={FormData.packageWeight.value}
          onChange={FormData.packageWeight.set}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Package Dimensions'
          value={FormData.packageDimensions.value}
          onChange={FormData.packageDimensions.set}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Irregular Package'
          value={FormData.irregularPackage.value}
          onChange={FormData.irregularPackage.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Item Location - Country/Region'
          value={FormData.itemLocationCountryRegion.value}
          onChange={FormData.itemLocationCountryRegion.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Item Location - Zip Code'
          value={FormData.itemLocationZipCode.value}
          onChange={FormData.itemLocationZipCode.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Item Location - City, State'
          value={FormData.itemLocationCityState.value}
          onChange={FormData.itemLocationCityState.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Item Disclosures - Product Documents'
          value={FormData.productDocuments.value}
          onChange={FormData.productDocuments.set}
          required={true}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Promote Your Listing (General)'
          value={FormData.promoteListingGeneral.value}
          onChange={FormData.promoteListingGeneral.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Listing Ad Rate (General)'
          value={FormData.adRate.value}
          onChange={FormData.adRate.set}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Promote Your Listing (Priority)'
          value={FormData.promoteListingPriority.value}
          onChange={FormData.promoteListingPriority.set}
          required={true}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Charity'
          value={FormData.charity.value}
          onChange={FormData.charity.set}
          required={true}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <Button onClick={submitForm} />
      </div>
    </form>
  );
}

export default Listing;
