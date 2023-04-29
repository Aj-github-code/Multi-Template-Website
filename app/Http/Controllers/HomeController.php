<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Helper as Helper;

class HomeController extends Controller
{
    
    public function index(){
        $getSetup = json_decode(Helper::postApi('setup/lists', 'POST'));
        // echo '<pre> hii';
        // print_r($getSetup);exit;
        $siteSettings = [];
        if($getSetup){
            $setup = $getSetup->data;
    
            foreach($setup as $key => $value){
                if($value->module_name === 'Website'){
                    $siteSettings = json_decode($value->config);
                }
            }
        }
        
        return view('welcome', compact('siteSettings'));
    }
}
