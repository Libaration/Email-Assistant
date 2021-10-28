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
  const html = `<strong style="color:rgb(32, 61, 133);">${image_tag}</strong>
                                                </p>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div data-aqa="block-image" style="overflow:hidden;">
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                                        <tbody>
                                          <tr>
                                            <td class="null" style="padding:0px 0px 5px;">
                                              <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin:auto;">
                                                <tbody>
                                                  <tr>
                                                    <td style="border-color:transparent;border-style:none;border-width:0px;">
                                                      <img src="${image}" class="fusionResponsiveImage" alt="" width="540" height="auto" style="display:block;width:540px;height:auto;margin:auto;background-color:transparent;">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <table cellpadding="0" cellspacing="0" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="Subheadline" style="margin:5px 0px 0px;padding:0px;border-color:transparent;border-width:0px;border-style:none;background-color:transparent;display:block;color:rgb(51,51,51);font-family:Roboto, sans-serif;font-size:14px;text-align:left;">
                                              <p class="paragraph-spacing-none" style="margin-top:0px;margin-bottom:0px;">
                                                <strong style="background-color:transparent;color:rgb(51, 51, 51);">Online -</strong> <strong style="font-family:sans-serif;">Ends</strong> @ ${end_time}
                                              </p>
                                              <p class="paragraph-spacing-none" style="margin-top:0px;margin-bottom:0px;">
                                                ${title}
                                                <strong style="font-size:14px;font-family:Roboto, sans-serif;">${
                                                  winning_bid == null
                                                    ? 'Starting Bid: '
                                                    : 'Current Bid: '
                                                }${
    winning_bid || starting_bid
  } - Initial Deposit ${deposit}</strong>
                                                      <a href="${url}?page=1&amp;search=&amp;sort=&amp;lotsTotal=2&amp;pageSize=32?utm_source=email&amp;utm_medium=listing-link&amp;utm_campaign=morning-email&amp;utm_content=view-listing" style="text-decoration:none;color:rgb(32,61,133);font-family:Roboto, sans-serif;font-size:16px;">Bid Now</a>`;

  return html;
};

export const beginningHTML = `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <!--[if gte mso 15]>
                        <xml>
                                <o:OfficeDocumentSettings>
                                <o:AllowPNG/>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                                </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style type="text/css">
    body {
    margin:0;
    padding:0;
    background: rgb(255,255,255);
    }
    table td, table th {
    border-spacing: 0;
    border-collapse: collapse;
    border: 0 none;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    }

    .ic-preview-text {
    display: none !important;
    mso-hide: all;
    }

    .fusionResponsiveColumn, .fusionNonResponsiveColumn {
    font-weight: normal;
    text-align:left;
    }
    /*+++++++++++++++++ MOBILE ++++++++++++++++++*/
    @media only screen and (max-width: 620px) {
    .fusionResponsiveContent {
        width: 100%!important;
    }
    .fusionResponsiveColumn {
        width: auto!important;
        display:block;
    }

    .fusionResponsiveImage {
        width: 100%!important;
    }
    .fusionResponsiveImageTable {
        padding-bottom: 0!important;
    }
    .fusionResponsiveCanvas {
        padding-top: 0px!important;
        padding-bottom: 0px!important;
    }
    }

    @media only screen and (max-width: 500px) {
    .fusionResponsiveContent {
        width: 100%!important;
    }
    .fusionResponsiveColumn {
        width: auto!important;
        display:block;
    }

    .fusionResponsiveImage {
        width: 100%!important;
    }
    .fusionResponsiveCanvas {
        padding-top: 0px!important;
        padding-bottom: 0px!important;
    }
    }
    </style><!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,500,500i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,500,500i,700,700i" rel="stylesheet"><!--<![endif]-->
    <title></title>
  </head>
  <body>
    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;margin:0px auto;">
      <tbody>
        <tr>
          <td class="fusionResponsiveCanvas" valign="top" style="width:100%;padding-top:15px;padding-bottom:15px;background-color:rgb(255,255,255);background-repeat:no-repeat;font-family:Roboto, sans-serif;">
            <table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width:100%;margin:0px auto;">
              <tbody>
                <tr>
                  <td valign="top" style="width:100%;">
                    <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0px auto;width:600px;table-layout:fixed;background-color:rgb(221,221,221);">
                      <tbody>
                        <tr>
                          <td style="background-color:rgb(221,221,221);padding:15px;border-color:transparent;border-width:0px;border-style:none;">
                            <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">
                              <tbody>
                                <tr>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
                                  <th valign="top" class="fusionResponsiveColumn" data-fusion-class="" style="width:540px;background-color:transparent;padding:0px;border-color:transparent;border-style:none;border-width:0px;transition:all 0.2s ease 0s;">
                                    <table cellpadding="0" cellspacing="0" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="" style="margin:5px 0px;padding:0px;border-color:transparent;border-width:0px;border-style:none;background-color:transparent;display:block;color:rgb(51,51,51);font-family:Roboto, sans-serif;font-size:14px;text-align:left;">
                                              <p style="mso-line-height-rule:exactly;text-align:center;line-height:24px;margin-top:0px;margin-bottom:0px;">
                                                <strong style="font-size:18px;font-family:Roboto, sans-serif;">Want To Learn More About Auctions?</strong>
                                              </p>
                                              <p class="paragraph-spacing-none" style="mso-line-height-rule:exactly;text-align:center;line-height:24px;margin-top:0px;margin-bottom:0px;">
                                                <span style="font-size:18px;">Visit The Ashland Auction Learning Center!</span>
                                              </p>
                                              <p class="paragraph-spacing-none" style="mso-line-height-rule:exactly;text-align:center;line-height:24px;margin-top:0px;margin-bottom:0px;">
                                                <strong style="font-size:18px;">Want To Join In? Read About Our</strong> <a href="https://blog.ashlandauction.com/auction-services/?utm_source=email&amp;utm_medium=auction-services-link&amp;utm_campaign=morning-email&amp;utm_content=auction-services" target="_blank" style="font-size:18px;color:rgb(32,61,133);text-decoration:underline;"><strong>Auction Services</strong></a>
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div data-fusion-class="" style="overflow:hidden;">
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                                        <tbody>
                                          <tr>
                                            <td style="padding:0px;">
                                              <table cellpadding="0" cellspacing="0" align="center" style="margin:0px auto;width:100%;">
                                                <tbody>
                                                  <tr>
                                                    <td style="text-align:center;background:rgb(32,61,133);border-radius:4px;border-color:transparent;border-style:none;border-width:0px;padding:10px 20px;">
                                                      <a href="https://blog.ashlandauction.com/auction-services/?utm_source=email&amp;utm_medium=auction-services&amp;utm_campaign=morning-email&amp;utm_content=auction-services" style="text-decoration:none;color:rgb(255,255,255);font-family:Roboto, sans-serif;font-size:16px;">Click Here To Learn About Our Online Auction Services</a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </th>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
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
            <table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width:100%;margin:0px auto;">
              <tbody>
                <tr>
                  <td valign="top" style="width:100%;">
                    <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0px auto;width:600px;table-layout:fixed;background-color:rgb(255,255,255);">
                      <tbody>
                        <tr>
                          <td style="background-color:rgb(255,255,255);padding:15px;border-color:transparent;border-width:0px;border-style:none;">
                            <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">
                              <tbody>
                                <tr>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
                                  <th valign="top" class="fusionResponsiveColumn" data-fusion-class="" style="width:540px;background-color:transparent;padding:0px;border-color:transparent;border-style:none;border-width:0px;transition:all 0.2s ease 0s;">
                                    <table cellpadding="0" cellspacing="0" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="" style="margin:0px;padding:0px;border-color:transparent;border-width:0px;border-style:none;background-color:transparent;display:block;color:rgb(51,51,51);font-family:Roboto, sans-serif;font-size:14px;text-align:left;">
                                              <p class="paragraph-spacing-none" style="text-align:center;margin-top:0px;margin-bottom:0px;">
                                                <strong style="font-family:Roboto, sans-serif;color:rgb(32, 61, 133);">Wednesday, October 27th</strong>
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td style="padding-top:10px;padding-bottom:10px;">
                                            <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0px auto;width:100%;">
                                              <tbody>
                                                <tr>
                                                  <td style="mso-line-height-rule:exactly;font-size:0px;line-height:0px;border-bottom:1px solid rgb(136,136,136);">
                                                    &nbsp;
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="" style="margin:0px;padding:0px;border-color:transparent;border-width:0px;border-style:none;background-color:transparent;display:block;color:rgb(51,51,51);font-family:Roboto, sans-serif;font-size:14px;text-align:left;">
                                              <p style="text-align:center;margin-top:0px;margin-bottom:0px;">
                                                <strong style="color:rgb(196, 9, 9);">Credit Card Authorization Required On All Auctions. Click</strong> <a href="https://blog.ashlandauction.com/2021/05/01/good-faith-authorization-charges/?utm_source=email&amp;utm_medium=banner&amp;utm_campaign=morning-email&amp;utm_content=credit-cards" target="_blank" style="color:rgb(196, 9, 9);text-decoration:underline;"><strong>Here</strong></a> <strong style="color:rgb(196, 9, 9);">For More Information.</strong>
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </th>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
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
            <table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width:100%;margin:0px auto;">
              <tbody>
                <tr>
                  <td valign="top" style="width:100%;">
                    <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0px auto;width:600px;table-layout:fixed;background-color:rgb(255,255,255);">
                      <tbody>
                        <tr>
                          <td style="background-color:rgb(255,255,255);padding:15px;border-color:transparent;border-width:0px;border-style:none;">
                            <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">
                              <tbody>
                                <tr>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
                                  <th valign="top" class="fusionResponsiveColumn" data-fusion-class="" style="width:540px;background-color:transparent;padding:0px;border-color:transparent;border-style:none;border-width:0px;transition:all 0.2s ease 0s;">
                                    <table cellpadding="0" cellspacing="0" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="" style="">
                                              <div style="margin:0px;padding:10px;border-color:rgb(32, 61, 133);border-width:2px;border-style:solid;background-color:rgb(255,255,255);display:block;color:rgb(51, 51, 51);font-family:Roboto, sans-serif;font-size:14px;text-align:center;">
                                                <p style="margin-bottom:0px;margin-top:0px;">`;

export const endingHTML = `</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </th>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
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
            <table cellpadding="0" cellspacing="0" border="0" data-fusion-class="Footer,Contrast" style="width:100%;margin:0px auto;">
              <tbody>
                <tr>
                  <td valign="top" style="width:100%;">
                    <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0px auto;width:600px;table-layout:fixed;background-color:rgb(35,63,133);">
                      <tbody>
                        <tr>
                          <td style="background-color:rgb(35,63,133);padding:5px 15px;border-color:transparent;border-width:0px;border-style:none;">
                            <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">
                              <tbody>
                                <tr>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
                                  <th valign="top" class="fusionResponsiveColumn" data-fusion-class="" style="width:540px;background-color:transparent;padding:0px;border-color:transparent;border-style:none;border-width:0px;transition:all 0.2s ease 0s;">
                                    <table style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="Content" style="margin:0px 0px 10px;">
                                              <div style="box-sizing:content-box;text-align:center;">
                                                <a href="https://www.facebook.com/AshlandAuctionGroup/?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=facebook" style="text-decoration:none;cursor:pointer;box-sizing:content-box;"><img src="https://ui.icontact.com/assets/editor-social-icons/white-transparent/facebook.png" alt="Facebook" height="40" width="40" style="height:40px;width:40px;cursor:pointer;box-sizing:content-box;border:0px;" title="Facebook"></a><a href="https://www.instagram.com/ashlandauction/?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=instagram" style="text-decoration:none;cursor:pointer;box-sizing:content-box;"><img src="https://ui.icontact.com/assets/editor-social-icons/white-transparent/instagram.png" alt="Instagram" height="40" width="40" style="height:40px;width:40px;cursor:pointer;box-sizing:content-box;border:0px;" title="Instagram"></a><a href="https://www.linkedin.com/company/ashland-auction-group/about/?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=linkedin" style="text-decoration:none;cursor:pointer;box-sizing:content-box;"><img src="https://ui.icontact.com/assets/editor-social-icons/white-transparent/linkedin.png" alt="LinkedIn" height="40" width="40" style="height:40px;width:40px;cursor:pointer;box-sizing:content-box;border:0px;" title="LinkedIn"></a><a href="https://twitter.com/Ashland_Auction?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=twitter" style="text-decoration:none;cursor:pointer;box-sizing:content-box;"><img src="https://ui.icontact.com/assets/editor-social-icons/white-transparent/twitter.png" alt="Twitter" height="40" width="40" style="height:40px;width:40px;cursor:pointer;box-sizing:content-box;border:0px;" title="Twitter"></a>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="Content" style="margin:0px 0px 20px;padding:0px;border-color:transparent;border-width:0px;border-style:none;background-color:rgb(32,61,133);display:block;color:rgb(51,51,51);font-family:Roboto, sans-serif;font-size:14px;text-align:left;">
                                              <p style="text-align:center;margin-top:0px;margin-bottom:0px;">
                                                <strong style="font-family:Raleway, sans-serif;color:rgb(255, 255, 255);">Questions?</strong> <a href="https://www.ashlandauction.com/contact-us?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=contact-us" target="_blank" style="font-family:Raleway, sans-serif;color:rgb(255, 255, 255);text-decoration:underline;">Contact us today!</a>
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="Content" style="margin:0px 0px 20px;padding:0px;border-color:transparent;border-width:0px;border-style:none;background-color:rgb(32,61,133);display:block;color:rgb(51,51,51);font-family:Roboto, sans-serif;font-size:14px;text-align:left;">
                                              <p style="text-align:center;margin-top:0px;margin-bottom:0px;">
                                                <span style="color:rgb(255, 255, 255);">*You are receiving this message from your active account with ashlandauction.com. If you wish to not receive this message or change your preferences then proceed to the link below to manage your account.</span>
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div data-fusion-class="" style="overflow:hidden;">
                                      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                                        <tbody>
                                          <tr>
                                            <td style="padding:0px;">
                                              <table cellpadding="0" cellspacing="0" align="center" style="margin:0px auto;">
                                                <tbody>
                                                  <tr>
                                                    <td style="text-align:center;background:rgb(35,63,133);border-radius:4px;border-color:rgb(253,253,253);border-style:solid;border-width:2px;padding:5px 10px;">
                                                      <a href="https://www.ashlandauction.com/account/preferences?utm_source=email&amp;utm_medium=footer&amp;utm_campaign=morning-email&amp;utm_content=manage-subscription" style="text-decoration:none;color:rgb(255,255,255);font-family:Roboto, sans-serif;font-size:14px;">Manage Subscriptions</a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </th>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
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
            <table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width:100%;margin:0px auto;">
              <tbody>
                <tr>
                  <td valign="top" style="width:100%;">
                    <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0px auto;width:600px;table-layout:fixed;background-color:rgb(35,63,133);">
                      <tbody>
                        <tr>
                          <td style="background-color:rgb(35,63,133);padding:15px;border-color:transparent;border-width:0px;border-style:none;">
                            <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" style="width:100%;table-layout:fixed;">
                              <tbody>
                                <tr>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
                                  <th valign="top" class="fusionResponsiveColumn" data-fusion-class="" style="width:540px;background-color:transparent;padding:0px;border-color:transparent;border-style:none;border-width:0px;transition:all 0.2s ease 0s;">
                                    <table cellpadding="0" cellspacing="0" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div data-fusion-class="" style="margin:0px;padding:0px;border-color:transparent;border-width:0px;border-style:none;background-color:rgb(32,61,133);display:block;color:rgb(51,51,51);font-family:Roboto, sans-serif;font-size:14px;text-align:left;">
                                              <p style="text-align:justify;margin-top:0px;margin-bottom:0px;">
                                                <span style='background-color:rgb(0, 61, 115);font-size:8px;color:rgb(255, 255, 255);font-family:"Open Sans", sans-serif;'>THE INFORMATION CONTAINED HEREIN HAS BEEN OBTAINED FROM SOURCES DEEMED RELIABLE AND BELIEVED TO BE ACCURATE. HOWEVER, NO EXPRESS OR IMPLIED WARRANTY IS MADE AS TO THE ACCURACY OF THESE REPRESENTATIONS. Listing details are deemed reliable but are not guaranteed and should be independently verified. COMPETITIVE MARKET ANALYSIS DISCLOSURE This analysis is not an appraisal. It is intended only for the purpose of assisting buyers or sellers or prospective buyers or sellers in deciding the listing, offering, or sale price of the real property.</span>
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </th>
                                  <th class="fusionResponsiveColumn" style="mso-line-height-rule:exactly;width:15px;line-height:0;font-size:0px;">
                                    <!--[if !mso]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block;"><!--<![endif]-->
                                  </th>
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
    </table>
  </body>
</html>`;
