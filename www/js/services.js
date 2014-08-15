angular.module('starter.services', [])

.factory('Notification', function($http, $q) {
    // FIXME: Replace with API call

})
.factory('Campaigns', function($http, $q) {
    // FIXME: Replace with API call
    var api_host = 'http://172.16.131.105:8080';
    var campaigns = [
        {
            'campaign_id' : 15,
            'campaign_name' : 'Random stuff',
            'created_on' : '2009-04-23 15:35:21',
            'modified_on' : '2014-08-05 15:08:37',
            'account_id' : 1,
            'user_id' : 900,
            'deleted' : 'NULL',
            'campaign_key' : 'U99AkIDItAJ6KupW4cDF',
            'default_markup_percentage' : 40.000000,
            'advertiser_id' : 26583,
            'default_additional_markup_price_per_uom' : 'NULL',
            'default_additional_markup_uom' : 'NULL',
            'budget_cap' : 'NULL',
            'admin_notes' : 'NULL',
            'google_ad_group_id' : 'NULL',
            'rate_card_id' : 689,
            'timezone' : 'America/New_York',
            'nielsen_id' : 'NULL',
            'nielsen_campaign_id' : 'NULL',
            'use_dst' : 'T',
            'nielsen_gender' : 'both',
            'nielsen_target_start_age' : 2,
            'nielsen_target_end_age' : 999,
            'nielsen_activated' : 'F',
            'is_managed' : 'T',
            'nielsen_grp_activated' : 'F',
            'campaign_type' : 'media',
            'parent_campaign_id' : 'NULL',
            'frequency_cap' : 'NULL',
            'frequency_cap_interval' : 'NULL',
            'nielsen_geos' : 'US',
            'is_viewability' : 'F',
            'billing_type' : 'Testing',
            'billing_data_to_use' : 'tpas'
        }, {
            'campaign_id' : 16,
            'campaign_name' : 'Tubemogul/stokaace',
            'created_on' : '2009-04-23 15:35:21',
            'modified_on' : '2014-07-10 19:48:45',
            'account_id' : 1,
            'user_id' : 900,
            'deleted' : 'NULL',
            'campaign_key' : 'aP4VOVZyBCY3WUxHhjc5',
            'default_markup_percentage' : 20.000000,
            'advertiser_id' : 309,
            'default_additional_markup_price_per_uom' : 'NULL',
            'default_additional_markup_uom' : 'NULL',
            'budget_cap' : 'NULL',
            'admin_notes' : 'NULL',
            'google_ad_group_id' : 'NULL',
            'rate_card_id' : 691,
            'timezone' : 'America/New_York',
            'nielsen_id' : 'NULL',
            'nielsen_campaign_id' : 'NULL',
            'use_dst' : 'T',
            'nielsen_gender' : 'both',
            'nielsen_target_start_age' : 2,
            'nielsen_target_end_age' : 999,
            'nielsen_activated' : 'F',
            'is_managed' : 'T',
            'nielsen_grp_activated' : 'F',
            'campaign_type' : 'media',
            'parent_campaign_id' : 'NULL',
            'frequency_cap' : 'NULL',
            'frequency_cap_interval' : 'NULL',
            'nielsen_geos' : 'US',
            'is_viewability' : 'F',
            'billing_type' : 'Testing',
            'billing_data_to_use' : 'tpas'
        }
    ];

    return {
        all: function(email) {
        	var deferred = $q.defer();
	    	$http({
	    			method: 'GET',
	    			url: api_host+'/email/'+email,
	    		})
	    		.success(function(data) {
	                deferred.resolve(data);
	            })
	            .error(function(data) {
	                deferred.reject(data);
	            });
        	return deferred.promise;
        },
        get: function(id) {
            var campaign =  campaigns.filter(function(campaign) {
                return campaign.campaign_id == id;
            });
            return campaigns[0];
        },
        getDetails: function(key) {
	    	/* TODO: Use Stats API to get campaign details */
	    	var data = {
	    		impressions: 100000,
	    		completion_rate: 85,
	    		click_rate: 125,
	    		cost: 1000
	    	}
	    	return data;
	    	/*
	    	$http({
	    			method: 'GET',
	    			url: '',
	    			data: {campaign_key: key}
	    		})
	    		.success(function(data) {
	    			return data;
	    		});
			*/
	    }
    }
})

.factory('Placements', function() {
    var placements = [
        {
            "campaign_placement_id":1,
            "campaign_placement_key":"YFk8RnlYHwnG4KbFSQor",
            "campaign_key":"U99AkIDItAJ6KupW4cDF",
            "placement_site_id":3,
            "campaign_placement_name":"USA",
            "is_rtb":"F",
            "is_managed":"T",
            "ad_template":"NULL",
            "purchase_type":"NULL",
            "units_purchased":"NULL",
            "price_per_uom":"NULL",
            "status":"Deleted",
            "budget_interval":"day",
            "budget":"1",
            "start_time":"NULL",
            "end_time":"NULL",
            "pacing":"immediate",
            "language":"en",
            "fill_strategy_class":"",
            "fill_strategy_enum":"EVEN",
            "day_parting_json":"NULL",
            "bid_calculator_class":"",
            "max_cpm":"1",
            "created":"2010-02-24 14:14:58",
            "modified":"2014-06-25 12:17:23",
            "deleted":"2011-03-12 16:20:06",
            "campaign_placement_type":"Direct",
            "markup_percentage":0.000000,
            "frequency_cap":"NULL",
            "frequency_cap_interval":"NULL",
            "optimize_on":"views",
            "targeting_segment_id":"NULL",
            "run_level":100,
            "campaign_id":15,
            "survey_exposed":"T",
            "priority":100,
            "package_id":"NULL",
            "additional_markup_price_per_uom":"NULL",
            "additional_markup_uom":"NULL",
            "tags":"NULL",
            "survey_control_placement_id":"NULL",
            "private_feeds_only":"F",
            "exclude_autoplay_preroll":"F",
            "run_simulation":"F",
            "goal_interval":"day",
            "enforce_goal_cap":"F",
            "nielsen_id":"NULL",
            "nielsen_placement_id":"NULL",
            "rate_card_id":16264,
            "min_age":"0",
            "max_age":"0",
            "gender":"all",
            "trps":"0",
            "is_tv":"F",
            "is_grp_media_buy":"F",
            "user_dayparting":"F",
            "is_brandpoint_segments_targeting_optional":"F",
            "is_viewability":"F",
            "is_demographic_segments_disabled":"F",
            "is_brandpoint_placement_otp_decisioning_enabled":"F",
            "nielsen_activation_date":"NULL",
            "ba_placement_id":"NULL",
            "is_custom_ad_scheduling_enabled":"F",
            "exempt_from_pixel_timeout":"F",
            "is_brandpoint_nielsen_disabled":"F",
            "is_ontarget_media_buy":"F",
            "is_cppbi_enabled":"F",
            "average_site_otp":"NULL",
            "average_segment_otp":"NULL",
            "site_safety_block":"F",
            "brandpoint_pricing_applied_on_media":"F",
            "pre_bid_domain_block":"F",
            "post_bid_player_size_block":"F",
            "is_brandaccess":"F"
        }, {
            "campaign_placement_id":2,
            "campaign_placement_key":"ZDaVTWqjG3y7WH6Nlprn",
            "campaign_key":"U99AkIDItAJ6KupW4cDF",
            "placement_site_id":3,
            "campaign_placement_name":"USA - Autoplay",
            "is_rtb":"F",
            "is_managed":"T",
            "ad_template":"NULL",
            "purchase_type":"NULL",
            "units_purchased":"NULL",
            "price_per_uom":"NULL",
            "status":"Inactive",
            "budget_interval":"day",
            "budget":"1",
            "start_time":"NULL",
            "end_time":"NULL",
            "pacing":"immediate",
            "language":"en",
            "fill_strategy_class":"",
            "fill_strategy_enum":"EVEN",
            "day_parting_json":"NULL",
            "bid_calculator_class":"",
            "max_cpm":"1",
            "created":"2010-02-24 14:46:39",
            "modified":"2014-06-25 12:17:23",
            "deleted":"NULL",
            "campaign_placement_type":"Direct",
            "markup_percentage":0.000000,
            "frequency_cap":"NULL",
            "frequency_cap_interval":"NULL",
            "optimize_on":"views",
            "targeting_segment_id":"NULL",
            "run_level":100,
            "campaign_id":15,
            "survey_exposed":"T",
            "priority":100,
            "package_id":"NULL",
            "additional_markup_price_per_uom":"NULL",
            "additional_markup_uom":"NULL",
            "tags":"NULL",
            "survey_control_placement_id":"NULL",
            "private_feeds_only":"F",
            "exclude_autoplay_preroll":"F",
            "run_simulation":"F",
            "goal_interval":"day",
            "enforce_goal_cap":"F",
            "nielsen_id":"NULL",
            "nielsen_placement_id":"NULL",
            "rate_card_id":16266,
            "min_age":"0",
            "max_age":"0",
            "gender":"all",
            "trps":"0",
            "is_tv":"F",
            "is_grp_media_buy":"F",
            "user_dayparting":"F",
            "is_brandpoint_segments_targeting_optional":"F",
            "is_viewability":"F",
            "is_demographic_segments_disabled":"F",
            "is_brandpoint_placement_otp_decisioning_enabled":"F",
            "nielsen_activation_date":"NULL",
            "ba_placement_id":"NULL",
            "is_custom_ad_scheduling_enabled":"F",
            "exempt_from_pixel_timeout":"F",
            "is_brandpoint_nielsen_disabled":"F",
            "is_ontarget_media_buy":"F",
            "is_cppbi_enabled":"F",
            "average_site_otp":"NULL",
            "average_segment_otp":"NULL",
            "site_safety_block":"F",
            "brandpoint_pricing_applied_on_media":"F",
            "pre_bid_domain_block":"F",
            "post_bid_player_size_block":"F",
            "is_brandaccess":"F"
        }, {
            "campaign_placement_id":3,
            "campaign_placement_key":"xZsoW8xXiAnYRhuOD9jZ",
            "campaign_key":"U99AkIDItAJ6KupW4cDF",
            "placement_site_id":3,
            "campaign_placement_name":"YouTube test",
            "is_rtb":"F",
            "is_managed":"T",
            "ad_template":"NULL",
            "purchase_type":"NULL",
            "units_purchased":"NULL",
            "price_per_uom":"NULL",
            "status":"Inactive",
            "budget_interval":"day",
            "budget":"1",
            "start_time":"NULL",
            "end_time":"NULL",
            "pacing":"immediate",
            "language":"en",
            "fill_strategy_class":"",
            "fill_strategy_enum":"EVEN",
            "day_parting_json":"NULL",
            "bid_calculator_class":"",
            "max_cpm":"1",
            "created":"2010-02-24 19:03:00",
            "modified":"2014-06-25 12:17:23",
            "deleted":"NULL",
            "campaign_placement_type":"Direct",
            "markup_percentage":0.000000,
            "frequency_cap":"NULL",
            "frequency_cap_interval":"NULL",
            "optimize_on":"views",
            "targeting_segment_id":"NULL",
            "run_level":100,
            "campaign_id":15,
            "survey_exposed":"T",
            "priority":100,
            "package_id":"NULL",
            "additional_markup_price_per_uom":"NULL",
            "additional_markup_uom":"NULL",
            "tags":"NULL",
            "survey_control_placement_id":"NULL",
            "private_feeds_only":"F",
            "exclude_autoplay_preroll":"F",
            "run_simulation":"F",
            "goal_interval":"day",
            "enforce_goal_cap":"F",
            "nielsen_id":"NULL",
            "nielsen_placement_id":"NULL",
            "rate_card_id":16268,
            "min_age":"0",
            "max_age":"0",
            "gender":"all",
            "trps":"0",
            "is_tv":"F",
            "is_grp_media_buy":"F",
            "user_dayparting":"F",
            "is_brandpoint_segments_targeting_optional":"F",
            "is_viewability":"F",
            "is_demographic_segments_disabled":"F",
            "is_brandpoint_placement_otp_decisioning_enabled":"F",
            "nielsen_activation_date":"NULL",
            "ba_placement_id":"NULL",
            "is_custom_ad_scheduling_enabled":"F",
            "exempt_from_pixel_timeout":"F",
            "is_brandpoint_nielsen_disabled":"F",
            "is_ontarget_media_buy":"F",
            "is_cppbi_enabled":"F",
            "average_site_otp":"NULL",
            "average_segment_otp":"NULL",
            "site_safety_block":"F",
            "brandpoint_pricing_applied_on_media":"F",
            "pre_bid_domain_block":"F",
            "post_bid_player_size_block":"F",
            "is_brandaccess":"F"
        }, {
            "campaign_placement_id":4,
            "campaign_placement_key":"kJLm28b15FGIgbu6mDrb",
            "campaign_key":"aP4VOVZyBCY3WUxHhjc5",
            "placement_site_id":4,
            "campaign_placement_name":"US Viewers",
            "is_rtb":"F",
            "is_managed":"T",
            "ad_template":"NULL",
            "purchase_type":"NULL",
            "units_purchased":"NULL",
            "price_per_uom":"NULL",
            "status":"Inactive",
            "budget_interval":"day",
            "budget":"1",
            "start_time":"NULL",
            "end_time":"NULL",
            "pacing":"immediate",
            "language":"en",
            "fill_strategy_class":"",
            "fill_strategy_enum":"EVEN",
            "day_parting_json":"NULL",
            "bid_calculator_class":"",
            "max_cpm":"1",
            "created":"2010-02-25 02:51:42",
            "modified":"2014-06-25 12:17:23",
            "deleted":"NULL",
            "campaign_placement_type":"Direct",
            "markup_percentage":0.000000,
            "frequency_cap":"NULL",
            "frequency_cap_interval":"NULL",
            "optimize_on":"views",
            "targeting_segment_id":"NULL",
            "run_level":100,
            "campaign_id":16,
            "survey_exposed":"T",
            "priority":100,
            "package_id":"NULL",
            "additional_markup_price_per_uom":"NULL",
            "additional_markup_uom":"NULL",
            "tags":"NULL",
            "survey_control_placement_id":"NULL",
            "private_feeds_only":"F",
            "exclude_autoplay_preroll":"F",
            "run_simulation":"F",
            "goal_interval":"day",
            "enforce_goal_cap":"F",
            "nielsen_id":"NULL",
            "nielsen_placement_id":"NULL",
            "rate_card_id":16550,
            "min_age":"0",
            "max_age":"0",
            "gender":"all",
            "trps":"0",
            "is_tv":"F",
            "is_grp_media_buy":"F",
            "user_dayparting":"F",
            "is_brandpoint_segments_targeting_optional":"F",
            "is_viewability":"F",
            "is_demographic_segments_disabled":"F",
            "is_brandpoint_placement_otp_decisioning_enabled":"F",
            "nielsen_activation_date":"NULL",
            "ba_placement_id":"NULL",
            "is_custom_ad_scheduling_enabled":"F",
            "exempt_from_pixel_timeout":"F",
            "is_brandpoint_nielsen_disabled":"F",
            "is_ontarget_media_buy":"F",
            "is_cppbi_enabled":"F",
            "average_site_otp":"NULL",
            "average_segment_otp":"NULL",
            "site_safety_block":"F",
            "brandpoint_pricing_applied_on_media":"F",
            "pre_bid_domain_block":"F",
            "post_bid_player_size_block":"F",
            "is_brandaccess":"F"
        }
    ];
    
    return {
        all_by_campaign: function(campaign_key) {
            return placements.filter(function(placement) {
                console.log(placement.campaign_key == campaign_key);
                return placement.campaign_key == campaign_key;
            });
        },
        get: function(id) {
            var placement = placements.filter(function(placement) {
                return placement.campaign_placement_id == id;
            })
            return placements[0];
        },
        getDetails: function(key) {
	    	/* TODO: Use Stats API to get placement details */
	    	var data = {
	    		impressions: 100000,
	    		completion_rate: 85,
	    		click_rate: 125,
	    		cost: 1000
	    	}
	    	return data;
	    	/*
	    	$http({
	    			method: 'GET',
	    			url: '',
	    			data: {campaign_placement_key: key}
	    		})
	    		.success(function(data) {
	    			return data;
	    		});
			*/
	    }
    }
})

.factory('CampaignsTest', function($http) {
    // Might use a resource here that returns a JSON array

    // Get campaign data
    return {
        all: function() {
            $http({method: 'GET', url: 'http://stats-api-test01/data/v2/?partner_id=f7a342b291ae48ba67efb36d77b7fc4f873dc064&method=get_feed_by_time&account_id=409290&max_results=500&feed_id=c5C7ckU83rHywnIsw7RN&scope=account&start=2014-07-06&end=2014-08-12&timezone=Australia%2FSydney&date=1407883543&auth=cfda27092cbedb56fe739a9d1db34ea496caa41e'}).
            success(function(data, status, headers, config) {
                return data;
        }).
        error(function(data, status, headers, config) {
            return 'you suck';
        })},
        get: function(friendId) {
            // Simple index lookup
            return friends[friendId];
        }
    }
});
