<?php
namespace App\Helpers;
use App\Helpers\Helper as Helper;
use Session;

use DB;
class Helper{

    protected $apiurl;
	public function __construct($params = array())
    {
		// if($_SERVER['SERVER_NAME'] ===)
		$serverName;
		if (str_contains($_SERVER['SERVER_NAME'], '127.0.0')) { 
			// $serverName = "dealer-website.primarykeytech.in/dynamic";
			$serverName = "aitechiez.com";
		} else if (str_contains($_SERVER['SERVER_NAME'], 'localhost')) { 
			$serverName = "dealer-website.primarykeytech.in/dynamic";
		} else {
			$serverName = $_SERVER['SERVER_NAME'];
		}
		$this->apiurl = "https://".$serverName."/api/api/";
    }

    public function postApi($url = '', $method='POST', $params = [])
	{

		$helper = new Helper;
		$url =   $helper->apiurl.$url;
		// print_r($url);exit;	
		$curl = curl_init();

		curl_setopt_array($curl, array(
		CURLOPT_URL => $url,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => '',
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 0,
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => $method,
		CURLOPT_POSTFIELDS => http_build_query($params),
		CURLOPT_POST => 1,
		));

		$response = curl_exec($curl);

		curl_close($curl);
		return $response;
	}
}