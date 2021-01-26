import React from 'react';

const JrCaller = () => {
    return (
        <div class="pa4">
            <div class="overflow-auto">
                <table class="f6 w-100 mw8 center" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="fw10 f4 bb b--black-20 tl pb3 pr3 bg-white">LeadId</th>
                            <th class="fw10 f4 bb b--black-20 tl pb3 pr3 bg-white">LeadName</th>
                            <th class="fw10 f4 bb b--black-20 tl pb3 pr3 bg-white">LeadContact</th>
                            <th class="fw10 f4 bb b--black-20 tl pb3 pr3 bg-white">Status 1</th>
                            <th class="fw10 f4 bb b--black-20 tl pb3 pr3 bg-white">Status 2</th>
                        </tr>
                    </thead>
                    <tbody class="lh-copy">
                        <tr>
                            <td class="pv3 pr3 bb b--black-20">Hassan Johnson</td>
                            <td class="pv3 pr3 bb b--black-20">@hassan</td>
                            <td class="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
                            <td class="pv3 pr3 bb b--black-20"><input placeholder='status 1'/></td>
                            <td class="pv3 pr3 bb b--black-20"><input placeholder='status 2'/></td>
                            <td>
                                <a
                                    className="f4 link dim pa2 mb2 dib white br2 grow bg-dark-blue mr2"
                                    href="#0">
                                    Submit
                                </a>
                            </td>
                            <td>
                                <a
                                    className="f4 link dim pa2 mb2 dib white br2 bg-dark-blue"
                                    href="#0">
                                    HandOver
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default JrCaller;