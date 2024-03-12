import moment from 'moment';
const NewsletterAuction = (auction) => {
  const html = `<table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width: 100%; margin: 0px auto">
<tbody>
  <tr>
    <td valign="top" style="width: 100%">
      <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" align="center" style="
          margin: 0px auto;
          width: 600px;
          table-layout: fixed;
          background-color: rgb(255, 255, 255);
        ">
        <tbody>
          <tr>
            <td style="
                background-color: rgb(255, 255, 255);
                padding: 15px;
                border-color: transparent;
                border-width: 0px;
                border-style: none;
              ">
              <table class="fusionResponsiveContent" cellspacing="0" cellpadding="0" border="0" style="width: 100%; table-layout: fixed">
                <tbody>
                  <tr>
                    <th class="fusionResponsiveColumn" style="
                        mso-line-height-rule: exactly;
                        width: 15px;
                        line-height: 0;
                        font-size: 0px;
                      ">
                      <!--[if !mso
                      ]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block"><!--<![endif]-->
                    </th>
                    <th valign="top" class="fusionResponsiveColumn" data-fusion-class="" style="
                        width: 255px;
                        background-color: transparent;
                        padding: 0px;
                        border-color: transparent;
                        border-style: none;
                        border-width: 0px;
                        transition: all 0.2s ease 0s;
                      ">
                      <table cellpadding="0" cellspacing="0" style="width: 100%">
                        <tbody>
                          <tr>
                            <td>
                              <div data-fusion-class="" style="">
                                <div style="
                                    margin: 0px;
                                    padding: 3px;
                                    border-color: rgb(
                                      32,
                                      61,
                                      133
                                    );
                                    border-width: 2px;
                                    border-radius: 4px 4px 0px 0px;
                                    border-style: solid;
                                    background-color: rgb(
                                      255,
                                      255,
                                      255
                                    );
                                    display: block;
                                    color: rgb(51, 51, 51);
                                    font-family: Georgia,
                                      sans-serif;
                                    font-size: 14px;
                                    text-align: center;
                                  ">
                                  <p style="
                                      margin-top: 0px;
                                      margin-bottom: 0px;
                                    ">
                                    <strong style="
                                        color: rgb(32, 61, 133);
                                        font-family: Roboto,
                                          sans-serif;
                                      ">${auction.image_tag}</strong>
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div data-aqa="block-image" style="overflow: hidden">
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%">
                          <tbody>
                            <tr>
                              <td class="null" style="padding: 0px 0px 5px">
                                <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: auto">
                                  <tbody>
                                    <tr>
                                      <th style="
                                          display: block;
                                          border-color: transparent;
                                          border-style: none;
                                          border-width: 0px;
                                        ">
                                        <a href="https://www.ashlandauction.com/auctions/${
                                          auction.auction_id
                                        }" style=""><img src="${auction.highlights[0].cached_assets[0].url.replace(
                                          'thumb',
                                          'medium',
                                        )}" class="fusionResponsiveImage" alt="${auction.title}" width="255" height="auto" style="
                                              display: block;
                                              width: 255px;
                                              height: auto;
                                              margin: auto;
                                              background-color: transparent;
                                            " title="${auction.title}"></a>
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <table cellpadding="0" cellspacing="0" style="width: 100%">
                        <tbody>
                          <tr>
                            <td>
                              <div data-fusion-class="" style="
                                  margin: 0px;
                                  padding: 0px;
                                  border-color: transparent;
                                  border-width: 0px;
                                  border-style: none;
                                  background-color: transparent;
                                  display: block;
                                  color: rgb(51, 51, 51);
                                  font-family: Roboto, sans-serif;
                                  font-size: 14px;
                                  text-align: left;
                                ">
                                <h2 style="
                                    text-align: center;
                                    color: rgb(51, 51, 51);
                                    font-size: 14px;
                                    font-family: Roboto,
                                      sans-serif;
                                    margin-top: 0px;
                                    margin-bottom: 0px;
                                  ">
                                  ${auction.title}
                                </h2>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width: 100%">
                        <tbody>
                          <tr>
                            <td style="
                                padding-top: 5px;
                                padding-bottom: 5px;
                              ">
                              <table cellpadding="0" cellspacing="0" border="0" align="center" style="
                                  margin: 0px auto;
                                  width: 100%;
                                ">
                                <tbody>
                                  <tr>
                                    <td style="
                                        mso-line-height-rule: exactly;
                                        font-size: 0px;
                                        line-height: 0px;
                                        border-bottom: 1px solid
                                          rgb(136, 136, 136);
                                      ">
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" style="width: 100%">
                        <tbody>
                          <tr>
                            <td>
                              <div data-fusion-class="Subheadline" style="
                                  margin: 0px;
                                  padding: 0px;
                                  border-color: transparent;
                                  border-width: 0px;
                                  border-style: none;
                                  background-color: transparent;
                                  display: block;
                                  color: rgb(51, 51, 51);
                                  font-family: Roboto, sans-serif;
                                  font-size: 14px;
                                  text-align: left;
                                ">
                                <h2 style="
                                    mso-line-height-rule: exactly;
                                    line-height: 16px;
                                    color: rgb(51, 51, 51);
                                    font-size: 14px;
                                    font-family: Roboto,
                                      sans-serif;
                                    margin-top: 0px;
                                    margin-bottom: 0px;
                                  ">
                                  <strong style="
                                      background-color: transparent;
                                    ">Online- Ends</strong>
                                 @ ${moment(auction.end_time).format('hh:mm A')}
                                </h2>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" style="width: 100%">
                        <tbody>
                          <tr>
                            <td>
                              <div data-fusion-class="" style="
                                  margin: 0px;
                                  padding: 0px;
                                  border-color: transparent;
                                  border-width: 0px;
                                  border-style: none;
                                  background-color: transparent;
                                  display: block;
                                  color: rgb(51, 51, 51);
                                  font-family: Roboto, sans-serif;
                                  font-size: 14px;
                                  text-align: left;
                                ">
                                <p style="
                                    mso-line-height-rule: exactly;
                                    line-height: 14px;
                                    margin-top: 0px;
                                    margin-bottom: 0px;
                                  ">
                                  ${
                                    auction.lots['lots'][0].winning_bid_amount
                                      ? `Current Bid: $${new Intl.NumberFormat().format(
                                          auction.lots['lots'][0].winning_bid_amount,
                                        )}`
                                      : `Starting Bid: $${new Intl.NumberFormat().format(
                                          auction.lots['lots'][0].starting_bid,
                                        )}`
                                  }
                                - Deposit: 
                                  $${new Intl.NumberFormat().format(
                                    auction.lots['lots'][0].dynamic_fields.find(
                                      (field) => field.label === 'Initial Deposit',
                                    ).data.value,
                                  )}
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div data-fusion-class="Content" style="
                          overflow: hidden;
                          background: transparent;
                        ">
                        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%">
                          <tbody>
                            <tr>
                              <td style="padding: 0px 0px 5px">
                                <table cellpadding="0" cellspacing="0" align="left" style="width: 100%">
                                  <tbody>
                                    <tr>
                                      <td style="
                                          text-align: center;
                                          background: rgb(
                                            255,
                                            255,
                                            255
                                          );
                                          border-radius: 4px;
                                          border-color: rgb(
                                            32,
                                            61,
                                            133
                                          );
                                          border-style: solid;
                                          border-width: 2px;
                                          padding: 10px 20px;
                                        ">
                                        <a href="https://www.ashlandauction.com/auctions/${auction.auction_id}" style="
                                            text-decoration: none;
                                            color: rgb(
                                              32,
                                              61,
                                              133
                                            );
                                            font-family: Roboto,
                                              sans-serif;
                                            font-size: 16px;
                                          ">View Listing</a>
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
                    <th class="fusionResponsiveColumn" style="
                        mso-line-height-rule: exactly;
                        width: 15px;
                        line-height: 0;
                        font-size: 0px;
                      ">
                      <!--[if !mso
                      ]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block"><!--<![endif]-->
                    </th>
                    <th class="fusionResponsiveColumn" style="
                        mso-line-height-rule: exactly;
                        width: 15px;
                        line-height: 0;
                        font-size: 0px;
                      ">
                      <!--[if !mso
                      ]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block"><!--<![endif]-->
                    </th>

                   `;
  const auction2HTML = `<th valign="top" class="fusionResponsiveColumn" data-fusion-class="" style="
width: 255px;
background-color: transparent;
padding: 0px;
border-color: transparent;
border-style: none;
border-width: 0px;
transition: all 0.2s ease 0s;
">
<table cellpadding="0" cellspacing="0" style="width: 100%">
<tbody>
  <tr>
    <td>
      <div data-fusion-class="" style="">
        <div style="
            margin: 0px;
            padding: 3px;
            border-color: rgb(
              32,
              61,
              133
            );
            border-width: 2px;
            border-radius: 4px 4px 0px 0px;
            border-style: solid;
            background-color: rgb(
              255,
              255,
              255
            );
            display: block;
            color: rgb(51, 51, 51);
            font-family: Georgia,
              sans-serif;
            font-size: 14px;
            text-align: center;
          ">
          <p style="
              margin-top: 0px;
              margin-bottom: 0px;
            ">
            <strong style="
                color: rgb(32, 61, 133);
                font-family: Roboto,
                  sans-serif;
              ">${auction.image_tag}</strong>
          </p>
        </div>
      </div>
    </td>
  </tr>
</tbody>
</table>
<div data-aqa="block-image" style="overflow: hidden">
<table cellpadding="0" cellspacing="0" border="0" style="width: 100%">
  <tbody>
    <tr>
      <td class="null" style="padding: 0px 0px 5px">
        <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: auto">
          <tbody>
            <tr>
              <th style="
                  display: block;
                  border-color: transparent;
                  border-style: none;
                  border-width: 0px;
                ">
                <img src="${auction.highlights[0].cached_assets[0].url.replace('thumb', 'medium')}" class="fusionResponsiveImage" alt="" width="255" height="auto" style="
                    display: block;
                    width: 255px;
                    height: auto;
                    margin: auto;
                    background-color: transparent;
                  ">
              </th>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>
<table cellpadding="0" cellspacing="0" style="width: 100%">
<tbody>
  <tr>
    <td>
      <div data-fusion-class="" style="
          margin: 0px;
          padding: 0px;
          border-color: transparent;
          border-width: 0px;
          border-style: none;
          background-color: transparent;
          display: block;
          color: rgb(51, 51, 51);
          font-family: Roboto, sans-serif;
          font-size: 14px;
          text-align: left;
        ">
        <h2 style="
            text-align: center;
            color: rgb(51, 51, 51);
            font-size: 14px;
            font-family: Roboto,
              sans-serif;
            margin-top: 0px;
            margin-bottom: 0px;
          ">
          ${auction.title}
        </h2>
      </div>
    </td>
  </tr>
</tbody>
</table>
<table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width: 100%">
<tbody>
  <tr>
    <td style="
        padding-top: 5px;
        padding-bottom: 5px;
      ">
      <table cellpadding="0" cellspacing="0" border="0" align="center" style="
          margin: 0px auto;
          width: 100%;
        ">
        <tbody>
          <tr>
            <td style="
                mso-line-height-rule: exactly;
                font-size: 0px;
                line-height: 0px;
                border-bottom: 1px solid
                  rgb(136, 136, 136);
              ">
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
<table cellpadding="0" cellspacing="0" style="width: 100%">
<tbody>
  <tr>
    <td>
      <div data-fusion-class="Subheadline" style="
          margin: 0px;
          padding: 0px;
          border-color: transparent;
          border-width: 0px;
          border-style: none;
          background-color: transparent;
          display: block;
          color: rgb(51, 51, 51);
          font-family: Roboto, sans-serif;
          font-size: 14px;
          text-align: left;
        ">
        <h2 style="
            mso-line-height-rule: exactly;
            line-height: 16px;
            color: rgb(51, 51, 51);
            font-size: 14px;
            font-family: Roboto,
              sans-serif;
            margin-top: 0px;
            margin-bottom: 0px;
          ">
          <strong style="
              background-color: transparent;
            ">Online- Ends</strong>
           @ ${moment(auction.end_time).format('hh:mm A')}
        </h2>
      </div>
    </td>
  </tr>
</tbody>
</table>
<table cellpadding="0" cellspacing="0" style="width: 100%">
<tbody>
  <tr>
    <td>
      <div data-fusion-class="" style="
          margin: 0px;
          padding: 0px;
          border-color: transparent;
          border-width: 0px;
          border-style: none;
          background-color: transparent;
          display: block;
          color: rgb(51, 51, 51);
          font-family: Roboto, sans-serif;
          font-size: 14px;
          text-align: left;
        ">
        <p style="
            mso-line-height-rule: exactly;
            line-height: 14px;
            margin-top: 0px;
            margin-bottom: 0px;
          ">
          ${
            auction.lots['lots'][0].winning_bid_amount
              ? `Current Bid: $${new Intl.NumberFormat().format(auction.lots['lots'][0].winning_bid_amount)}`
              : `Starting Bid: $${new Intl.NumberFormat().format(auction.lots['lots'][0].starting_bid)}`
          } - Deposit:
          $${new Intl.NumberFormat().format(
            auction.lots['lots'][0].dynamic_fields.find((field) => field.label === 'Initial Deposit').data.value,
          )}
        </p>
      </div>
    </td>
  </tr>
</tbody>
</table>
<div data-fusion-class="Content" style="
  overflow: hidden;
  background: transparent;
">
<table cellpadding="0" cellspacing="0" border="0" style="width: 100%">
  <tbody>
    <tr>
      <td style="padding: 0px 0px 5px">
        <table cellpadding="0" cellspacing="0" align="left" style="width: 100%">
          <tbody>
            <tr>
              <td style="
                  text-align: center;
                  background: rgb(
                    255,
                    255,
                    255
                  );
                  border-radius: 4px;
                  border-color: rgb(
                    32,
                    61,
                    133
                  );
                  border-style: solid;
                  border-width: 2px;
                  padding: 10px 20px;
                ">
                <a href="https://www.ashlandauction.com/auctions/${auction.auction_id}" style="
                    text-decoration: none;
                    color: rgb(
                      32,
                      61,
                      133
                    );
                    font-family: Roboto,
                      sans-serif;
                    font-size: 16px;
                  ">View Listing</a>
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
<th class="fusionResponsiveColumn" style="
mso-line-height-rule: exactly;
width: 15px;
line-height: 0;
font-size: 0px;
">
<!--[if !mso
]><!--><img src="https://ui.icontact.com/assets/1px.png" class="css-fisw11" width="1" border="0" style="display: block"><!--<![endif]-->
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
</table>`;

  if (auction.index % 2 === 0) {
    return html;
  } else {
    return auction2HTML;
  }
};

export default NewsletterAuction;
