<?php

define("BASEPATH", __DIR__);
define("TWITTER_CONSUMER_KEY", "3rSwZxuTE0pnnbHAhSnu0g8YR");
define("TWITTER_CONSUMER_SECRET", "9MXPC6pgaYnjwxZ4RkuCBQ0uHT0RozPsw5FHIWsP49E1d4qavD");

session_start("WebRTC_Tetris_Sample");
session_regenerate_id(true);

require_once(BASEPATH . "/vendor/autoload.php");
use Abraham\TwitterOAuth\TwitterOAuth;

if ( ! isset($_SESSION["oauth_token"]) || ! isset($_SESSION["oauth_token_secret"]) ) {

    // first authenticate
    if ( ! isset($_GET["oauth_token"]) && ! isset($_GET["oauth_verifier"]) ) {
        $_SESSION = array();
        $twitter = new TwitterOAuth(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET);
        $token = $twitter->oauth("oauth/request_token");
        $_SESSION["oauth_token_secret"] = $token["oauth_token_secret"];

        $url = $twitter->url("oauth/authorize", array("oauth_token" => $token["oauth_token"]));
        header("Location: {$url}");
        exit;
    }

    // callback
    $twitter = new TwitterOAuth(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, $_GET["oauth_token"], $_SESSION["oauth_token_secret"]);
    $access_token = $twitter->oauth("oauth/access_token", array("oauth_verifier" => $_GET["oauth_verifier"]));
    $_SESSION["oauth_token"] = $access_token["oauth_token"];
    $_SESSION["oauth_token_secret"] = $access_token["oauth_token_secret"];
    $_SESSION["screen_name"] = $access_token["screen_name"];

    $twitter = new TwitterOAuth(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, $_SESSION["oauth_token"], $_SESSION["oauth_token_secret"]);
    $user = $twitter->get("account/verify_credentials");
    if ( isset($user->error) ) {
        view_error();
    } else {
        view($user->screen_name, str_replace("_normal", "", $user->profile_image_url));
    }
} else {
    $twitter = new TwitterOAuth(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, $_SESSION["oauth_token"], $_SESSION["oauth_token_secret"]);
    $user = $twitter->get("account/verify_credentials");
    if ( isset($user->error) ) {
        view_error();
    } else {
        view($user->screen_name, str_replace("_normal", "", $user->profile_image_url));
    }
}

function view($name, $image) {
    $obj = new stdClass;
    $obj->screen_name = $name;
    $obj->profile_image_url = $image;
    $json = json_encode($obj);
    require(BASEPATH . "/view.php");
}

function view_error() {
    require(BASEPATH . "/error.php");
}


