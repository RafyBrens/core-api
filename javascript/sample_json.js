/**
 * Here we will keep function which returns
 * sample json for the data field of add and
 * update calls.
 *
 * Created by rodrigopavezi on 12/09/14.
 */

/**
 * Returns the sample json depending on the entity
 *
 * @param dataTextAreaId
 * @returns {string}
 */
function getSampleJson(dataTextAreaId){

    var _sampleJson = "";

    switch (dataTextAreaId){
        case "addCompany_data":
        case "updateCompany_data":
            _sampleJson = getCompanySampleJson();
            break;
        case "addSchedule_data":
        case "updateSchedule_data":
            _sampleJson = getScheduleSampleJson();
            break;
        case "addUser_data":
        case "updateUser_data":
            _sampleJson = getUserSampleJson();
            break;
    }

    return _sampleJson;
}

/**
 * Returns sample json for Company entity
 *
 * @returns {string}
 */

function getCompanySampleJson(){

    var _company = new Object();

    _company.name = 'Sample Companys Name';
    /*_company.street = '';
    _company.unit = '';
    _company.city = '';
    _company.province = '';
    _company.country = '';
    _company.postal_code = '';
    _company.time_zone_offset = '';
    _company.telephone = '';
    _company.fax = '';
    _company.company_status = '';
    _company.notification_emails = '';
    _company.settings = '';
    _company.mail_sync_enabled = '';
    _company.alert_settings = '';
    _company.company_type = '';
    _company.services_provided = '';
    _company.market_segments = '';
    _company.target_groups = '';
    _company.views_per_display = '';
    _company.advertising_revenue_earn = '';
    _company.advertising_revenue_interested = '';*/

    return JSON.stringify(_company,"","\t");
}

/**
 * Returns sample json for Schedule entity
 *
 * @returns {string}
 */
function getScheduleSampleJson(){

    var _schedule = new Object();

    _schedule.name = "Sample schedule";

    return JSON.stringify(_schedule,"","\t");

}

/**
 * Returns sample json for User entity
 *
 * @returns {string}
 */
function getUserSampleJson(){

    var _user = new Object();

    _user.email = "sample@sample.com";

    return JSON.stringify(_user,"","\t");
}