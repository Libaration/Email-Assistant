import moment from 'moment';
const DateSection = (date) => {
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
                            width: 540px;
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
                                        text-align: center;
                                        margin-top: 0px;
                                        margin-bottom: 0px;
                                      ">
                                      <strong style="
                                          color: rgb(32, 61, 133);
                                          font-family: Roboto,
                                            sans-serif;
                                        ">{{DATE}}</strong><sup style="
                                          color: rgb(32, 61, 133);
                                          font-family: Roboto,
                                            sans-serif;
                                        "><strong></strong></sup>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" border="0" data-fusion-class="" style="width: 100%">
                            <tbody>
                              <tr>
                                <td style="
                                    padding-top: 10px;
                                    padding-bottom: 10px;
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
  return html.replace(
    '{{DATE}}',

    moment(date).year(moment().year()).format('ddd, MMMM DD'),
  );
};

export default DateSection;
