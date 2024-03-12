import date from 'date-and-time';
const now = new Date();
export const homeToHTML = ({
  image_tag,
  end_time,
  title,
  auction_id,
  winning_bid,
  starting_bid,
  deposit,
  image,
  auction_lot_id,
  url,
}) => {
  image = image.replace('thumb', 'large');
  image = image.replace('small', 'large');
  image = image.replace('medium', 'large');
  const convertedTime = new Date(end_time);
  if (winning_bid) {
    winning_bid = winning_bid.toLocaleString();
  }
  if (starting_bid) {
    starting_bid = starting_bid.toLocaleString();
  }
  if (deposit) {
    deposit = parseInt(deposit).toLocaleString();
  }
  const html = `
  <table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div data-fusion-class="">
<div style="margin: 0px; padding: 10px; background-color: #ffffff; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: center; border: 2px solid #203d85;">
<p style="margin-bottom: 0px; margin-top: 0px;"><strong style="color: #203d85;">${image_tag}</strong></p>
</div>
</div>
</td>
</tr>
</tbody>
</table>
  <div style="overflow: hidden;" data-aqa="block-image">
<table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="null" style="padding: 0px 0px 5px;">
<table style="margin: auto;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="border: 0px none transparent;"><img class="fusionResponsiveImage" style="display: block; width: 540px; height: auto; margin: auto; background-color: transparent;" src="${image}" alt="" width="540" height="auto" /></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div style="margin: 5px 0px 0px; padding: 0px; background-color: transparent; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: left; border: 0px none transparent;" data-fusion-class="Subheadline">
<p class="paragraph-spacing-none" style="margin-top: 0px; margin-bottom: 0px;"><strong style="color: #333333; background-color: transparent;">Online -</strong> <strong style="font-family: sans-serif;">Ends </strong>${date.format(
    convertedTime,
    'hh:mm A',
  )}</p>
<p class="paragraph-spacing-none" style="margin-top: 0px; margin-bottom: 0px; color:grey">${title}</p>
</div>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%;" border="0" cellspacing="0" cellpadding="0" data-fusion-class="">
<tbody>
<tr>
<td style="padding-top: 10px; padding-bottom: 10px;">
<table style="margin: 0px auto; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="mso-line-height-rule: exactly; font-size: 0px; line-height: 0px; border-bottom: 1px solid #888888;">&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div style="margin: 0px; padding: 0px; background-color: transparent; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: left; border: 0px none transparent;" data-fusion-class="">
<p style="mso-line-height-rule: exactly; line-height: 14px; margin-top: 0px; margin-bottom: 0px;"><strong style="font-family: Roboto, sans-serif; font-size: 14px;">${
    winning_bid == null ? 'Starting Bid: $' : 'Current Bid: $'
  }${winning_bid || starting_bid} - Initial Deposit: $${deposit}</strong></p>
</div>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%;" border="0" cellspacing="0" cellpadding="0" data-fusion-class="">
<tbody>
<tr>
<td style="padding-top: 10px; padding-bottom: 10px;">
<table style="margin: 0px auto; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="mso-line-height-rule: exactly; font-size: 0px; line-height: 0px; border-bottom: 1px solid #888888;">&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<div style="overflow: hidden;" data-fusion-class="Content">
<table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 0px 0px 5px;">
<table style="width: 100%;" cellspacing="0" cellpadding="0" align="left">
<tbody>
<tr>
<td style="text-align: center; background: #ffffff; border-radius: 4px; padding: 10px 20px; border: 2px solid #203d85;"><a style="text-decoration: none; color: #203d85; font-family: Roboto, sans-serif; font-size: 16px;" href="${url}?page=1&amp;search=&amp;sort=&amp;lotsTotal=2&amp;pageSize=32?utm_source=email&amp;utm_medium=listing-link&amp;utm_campaign=morning-email&amp;utm_content=view-listing">Bid Now</a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<div style="padding-top: 15px"></div>
`;

  return html;
};

export const beginningHTML = `<p>&nbsp;</p>
<!-- [if gte mso 15]>
                        <xml>
                                <o:OfficeDocumentSettings>
                                <o:AllowPNG/>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                                </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
<p></p>
<!-- [if !mso]><!-->
<p> </p>
<!--<![endif]-->
<p></p>
<table style="width: 100%; margin: 0px auto;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="fusionResponsiveCanvas" style="width: 100%; padding-top: 15px; padding-bottom: 15px; background-color: #ffffff; background-repeat: no-repeat; font-family: Roboto, sans-serif;" valign="top">
<table style="width: 100%; margin: 0px auto;" border="0" cellspacing="0" cellpadding="0" data-fusion-class="">
<tbody>
<tr>
<td style="width: 100%;" valign="top">
<table class="fusionResponsiveContent" style="margin: 0px auto; width: 600px; table-layout: fixed; background-color: #dddddd;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="background-color: #dddddd; padding: 15px; border: 0px none transparent;">
<table class="fusionResponsiveContent" style="width: 100%; table-layout: fixed;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
<th class="fusionResponsiveColumn" style="width: 540px; background-color: transparent; padding: 0px; transition: all 0.2s ease 0s; border: 0px none transparent;" valign="top" data-fusion-class="">
<table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div style="margin: 5px 0px; padding: 0px; background-color: transparent; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: left; border: 0px none transparent;" data-fusion-class="">
<p style="mso-line-height-rule: exactly; text-align: center; line-height: 24px; margin-top: 0px; margin-bottom: 0px;"><strong style="font-size: 18px; font-family: Roboto, sans-serif;">Want To Learn More About Auctions?</strong></p>
<p class="paragraph-spacing-none" style="mso-line-height-rule: exactly; text-align: center; line-height: 24px; margin-top: 0px; margin-bottom: 0px;"><span style="font-size: 18px;">Visit The Ashland Auction Learning Center!</span></p>
<p class="paragraph-spacing-none" style="mso-line-height-rule: exactly; text-align: center; line-height: 24px; margin-top: 0px; margin-bottom: 0px;"><strong style="font-size: 18px;">Want To Join In? Read About Our</strong> <a style="font-size: 18px; color: #203d85; text-decoration: underline;" href="https://blog.ashlandauction.com/auction-services/?utm_source=email&amp;utm_medium=auction-services-link&amp;utm_campaign=morning-email&amp;utm_content=auction-services" target="_blank" rel="noopener"><strong>Auction Services</strong></a></p>
</div>
</td>
</tr>
</tbody>
</table>
<div style="overflow: hidden;" data-fusion-class="">
<table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 0px;">
<table style="margin: 0px auto; width: 100%;" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="text-align: center; background: #203d85; border-radius: 4px; padding: 10px 20px; border: 0px none transparent;"><a style="text-decoration: none; color: #ffffff; font-family: Roboto, sans-serif; font-size: 16px;" href="https://blog.ashlandauction.com/auction-services/?utm_source=email&amp;utm_medium=auction-services&amp;utm_campaign=morning-email&amp;utm_content=auction-services">Click Here To Learn About Our Online Auction Services</a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</th>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%; margin: 0px auto;" border="0" cellspacing="0" cellpadding="0" data-fusion-class="">
<tbody>
<tr>
<td style="width: 100%;" valign="top">
<table class="fusionResponsiveContent" style="margin: 0px auto; width: 600px; table-layout: fixed; background-color: #ffffff;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="background-color: #ffffff; padding: 15px; border: 0px none transparent;">
<table class="fusionResponsiveContent" style="width: 100%; table-layout: fixed;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
<th class="fusionResponsiveColumn" style="width: 540px; background-color: transparent; padding: 0px; transition: all 0.2s ease 0s; border: 0px none transparent;" valign="top" data-fusion-class="">
<table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div style="margin: 0px; padding: 0px; background-color: transparent; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: left; border: 0px none transparent;" data-fusion-class="">
<p class="paragraph-spacing-none" style="text-align: center; margin-top: 0px; margin-bottom: 0px;"><strong style="color: #203d85; font-family: Roboto, sans-serif;">${date.format(
  now,
  'dddd, MMM DD',
)}</strong></p>
</div>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%;" border="0" cellspacing="0" cellpadding="0" data-fusion-class="">
<tbody>
<tr>
<td style="padding-top: 10px; padding-bottom: 10px;">
<table style="margin: 0px auto; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="mso-line-height-rule: exactly; font-size: 0px; line-height: 0px; border-bottom: 1px solid #888888;">&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div style="margin: 0px; padding: 0px; background-color: transparent; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: left; border: 0px none transparent;" data-fusion-class="">
<p style="text-align: center; margin-top: 0px; margin-bottom: 0px;"><strong style="color: #c40909;">Credit Card Authorization Required On All Auctions. Click</strong> <a style="color: #c40909; text-decoration: underline;" href="https://blog.ashlandauction.com/2021/05/01/good-faith-authorization-charges/?utm_source=email&amp;utm_medium=banner&amp;utm_campaign=morning-email&amp;utm_content=credit-cards" target="_blank" rel="noopener"><strong>Here</strong></a> <strong style="color: #c40909;">For More Information.</strong></p>
</div>
</td>
</tr>
</tbody>
</table>
</th>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%; margin: 0px auto;" border="0" cellspacing="0" cellpadding="0" data-fusion-class="">
<tbody>
<tr>
<td style="width: 100%;" valign="top">
<table class="fusionResponsiveContent" style="margin: 0px auto; width: 600px; table-layout: fixed; background-color: #ffffff;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="background-color: #ffffff; padding: 15px; border: 0px none transparent;">
<table class="fusionResponsiveContent" style="width: 100%; table-layout: fixed;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
<th class="fusionResponsiveColumn" style="width: 540px; background-color: transparent; padding: 0px; transition: all 0.2s ease 0s; border: 0px none transparent;" valign="top" data-fusion-class="">`;

export const endingHTML = `<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%; margin: 0px auto;" border="0" cellspacing="0" cellpadding="0" data-fusion-class="Footer,Contrast">
<tbody>
<tr>
<td style="width: 100%;" valign="top">
<table class="fusionResponsiveContent" style="margin: 0px auto; width: 600px; table-layout: fixed; background-color: #233f85;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="background-color: #233f85; padding: 5px 15px; border: 0px none transparent;">
<table class="fusionResponsiveContent" style="width: 100%; table-layout: fixed;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
<th class="fusionResponsiveColumn" style="width: 540px; background-color: transparent; padding: 0px; transition: all 0.2s ease 0s; border: 0px none transparent;" valign="top" data-fusion-class="">
<table style="width: 100%;">
<tbody>
<tr>
<td>
<div style="margin: 0px 0px 10px;" data-fusion-class="Content">
<div style="box-sizing: content-box; text-align: center;"><a style="text-decoration: none; cursor: pointer; box-sizing: content-box;" href="https://www.facebook.com/AshlandAuctionGroup/?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=facebook"><img style="height: 40px; width: 40px; cursor: pointer; box-sizing: content-box; border: 0px;" title="Facebook" src="https://ui.icontact.com/assets/editor-social-icons/white-transparent/facebook.png" alt="Facebook" width="40" height="40" /></a><a style="text-decoration: none; cursor: pointer; box-sizing: content-box;" href="https://www.instagram.com/ashlandauction/?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=instagram"><img style="height: 40px; width: 40px; cursor: pointer; box-sizing: content-box; border: 0px;" title="Instagram" src="https://ui.icontact.com/assets/editor-social-icons/white-transparent/instagram.png" alt="Instagram" width="40" height="40" /></a><a style="text-decoration: none; cursor: pointer; box-sizing: content-box;" href="https://www.linkedin.com/company/ashland-auction-group/about/?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=linkedin"><img style="height: 40px; width: 40px; cursor: pointer; box-sizing: content-box; border: 0px;" title="LinkedIn" src="https://ui.icontact.com/assets/editor-social-icons/white-transparent/linkedin.png" alt="LinkedIn" width="40" height="40" /></a><a style="text-decoration: none; cursor: pointer; box-sizing: content-box;" href="https://twitter.com/Ashland_Auction?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=twitter"><img style="height: 40px; width: 40px; cursor: pointer; box-sizing: content-box; border: 0px;" title="Twitter" src="https://ui.icontact.com/assets/editor-social-icons/white-transparent/twitter.png" alt="Twitter" width="40" height="40" /></a></div>
</div>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div style="margin: 0px 0px 20px; padding: 0px; background-color: #203d85; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: left; border: 0px none transparent;" data-fusion-class="Content">
<p style="text-align: center; margin-top: 0px; margin-bottom: 0px;"><strong style="font-family: Raleway, sans-serif; color: #ffffff;">Questions?</strong> <a style="font-family: Raleway, sans-serif; color: #ffffff; text-decoration: underline;" href="https://www.ashlandauction.com/contact-us?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=contact-us" target="_blank" rel="noopener">Contact us today!</a></p>
</div>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div style="margin: 0px 0px 20px; padding: 0px; background-color: #203d85; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: left; border: 0px none transparent;" data-fusion-class="Content">
<p style="text-align: center; margin-top: 0px; margin-bottom: 0px;"><span style="color: #ffffff;">*You are receiving this message from your active account with ashlandauction.com. If you wish to not receive this message or change your preferences then proceed to the link below to manage your account.</span></p>
</div>
</td>
</tr>
</tbody>
</table>
<div style="overflow: hidden;" data-fusion-class="">
<table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding: 0px;">
<table style="margin: 0px auto;" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="text-align: center; background: #233f85; border-radius: 4px; padding: 5px 10px; border: 2px solid #fdfdfd;"><a style="text-decoration: none; color: #ffffff; font-family: Roboto, sans-serif; font-size: 14px;" href="https://www.ashlandauction.com/account/preferences?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=manage-subscription">Manage Subscriptions</a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</th>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table style="width: 100%; margin: 0px auto;" border="0" cellspacing="0" cellpadding="0" data-fusion-class="">
<tbody>
<tr>
<td style="width: 100%;" valign="top">
<table class="fusionResponsiveContent" style="margin: 0px auto; width: 600px; table-layout: fixed; background-color: #233f85;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td style="background-color: #233f85; padding: 15px; border: 0px none transparent;">
<table class="fusionResponsiveContent" style="width: 100%; table-layout: fixed;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
<th class="fusionResponsiveColumn" style="width: 540px; background-color: transparent; padding: 0px; transition: all 0.2s ease 0s; border: 0px none transparent;" valign="top" data-fusion-class="">
<table style="width: 100%;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div style="margin: 0px; padding: 0px; background-color: #203d85; display: block; color: #333333; font-family: Roboto, sans-serif; font-size: 14px; text-align: left; border: 0px none transparent;" data-fusion-class="">
<p style="text-align: justify; margin-top: 0px; margin-bottom: 0px;"><span style="background-color: #003d73; font-size: 8px; color: #ffffff; font-family: 'Open Sans', sans-serif;">THE INFORMATION CONTAINED HEREIN HAS BEEN OBTAINED FROM SOURCES DEEMED RELIABLE AND BELIEVED TO BE ACCURATE. HOWEVER, NO EXPRESS OR IMPLIED WARRANTY IS MADE AS TO THE ACCURACY OF THESE REPRESENTATIONS. Listing details are deemed reliable but are not guaranteed and should be independently verified. COMPETITIVE MARKET ANALYSIS DISCLOSURE This analysis is not an appraisal. It is intended only for the purpose of assisting buyers or sellers or prospective buyers or sellers in deciding the listing, offering, or sale price of the real property.</span></p>
</div>
</td>
</tr>
</tbody>
</table>
</th>
<th class="fusionResponsiveColumn" style="mso-line-height-rule: exactly; width: 15px; line-height: 0; font-size: 0px;"><!-- [if !mso]><!--><img class="css-fisw11" style="display: block;" src="https://ui.icontact.com/assets/1px.png" width="1" border="0" /><!--<![endif]--></th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>`;
