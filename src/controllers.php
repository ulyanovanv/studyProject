<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

//Request::setTrustedProxies(array('127.0.0.1'));

$app->get('/', function () use ($app) {
    return $app['twig']->render('cv.html.twig', array());
})
->bind('homepage');


$app->post('/user', 'Controllers\\UserController::store');
$app->get('/user', 'Controllers\\UserController::index');

$app->get('/to-do-app', 'Controllers\\ToDoController::index');

$app->get('/to-do-app-load', function () use ($app) {
    $session = $app['session']->get('todo');
    return !empty($session) ? json_encode($session) : json_encode(['data' => [
        ['value' => 'buy stuff', 'isDone' => true],
        ['value' => 'eat stuff', 'isDone' => true],
        ['value' => 'go to sleep', 'isDone' => false],
    ]]);
});

$app->post('/to-do-app-save', function () use ($app) {
    $app['session']->set('todo', $_REQUEST['data']);
//    $_SESSION['todo'] = $_REQUEST['data'];
    return json_encode($_REQUEST);
});

//CV page contains

$app->get('/cv', function () use ($app) {
    return $app['twig']->render('mobile/index.html.twig', array());
});
$app->get('/bright-food', function () use ($app) {
    return $app['twig']->render('bright-food/bright-food.html.twig', array());
});
$app->get('/online-shop', function () use ($app) {
    return $app['twig']->render('online-shop/shop.html.twig', array());
});
$app->get('/calender', function () use ($app) {
    return $app['twig']->render('calender/index.html.twig', array());
});
$app->get('/mobile', function () use ($app) {
    return $app['twig']->render('mobile/mobile-version.html.twig', array());
});
$app->get('/c13', function () use ($app) {
    return $app['twig']->render('forms/c13.html.twig', array());
});
$app->get('/numbersgame', function () use ($app) {
    return $app['twig']->render('numbersgame/index.html.twig', array());
});



$app->get('/lesson3', function () use ($app) {
    return $app['twig']->render('lesson3/index.html.twig', array());
});
$app->get('/form-backend', function () use ($app) {
    return $app['twig']->render('forms/form-backend.html.twig', array());
});
$app->get('/ingridients', function () use ($app) {
    return $app['twig']->render('ReactIngredients/ingredients.html.twig', array());
});
$app->get('/calculator', function () use ($app) {
    return $app['twig']->render('small-calculator/calculator.html.twig', array());
});
$app->get('/oughts-and-crosses', function () use ($app) {
    return $app['twig']->render('game-oc/oughts-and-crosses.html.twig', array());
});
$app->get('/react-searching-form', function () use ($app) {
    return $app['twig']->render('react-searching-form/react-searching-form.html.twig', array());
});
$app->get('/templates-background', function () use ($app) {
    return $app['twig']->render('lesson3/templates-background.html.twig', array());
});




$app->get('/bright-food-products', function () use ($app) {
    return json_encode(['products' => [
            ["id" => 1, "src" => "/images/bright-food/products/cherries.png", "name" => "cherries", "category" => "fruit", "price" => 30, "previousPrice" => 40],
            ["id" => 2, "src" => "/images/bright-food/products/cole.png", "name" => "cole", "category" => "vegetables", "price" => 25, "previousPrice" => 0],
            ["id" => 3, "src" => "/images/bright-food/products/ginger.png", "name" => "ginger", "category" => "vegetables", "price" => 20, "previousPrice" => 23],
            ["id" => 4, "src" => "/images/bright-food/products/grapefruit.png", "name" => "grapefruits", "category" => "fruit", "price" => 30, "previousPrice" => 0],
            ["id" => 5, "src" => "/images/bright-food/products/mushrooms.png", "name" => "mushrooms", "category" => "vegetables", "price" => 30, "previousPrice" => 40],
            ["id" => 6, "src" => "/images/bright-food/products/olive.png", "name" => "olive", "category" => "vegetables", "price" => 33, "previousPrice" => 0],
            ["id" => 7, "src" => "/images/bright-food/products/onion.png", "name" => "onion", "category" => "vegetables", "price" => 15, "previousPrice" => 16],
            ["id" => 8, "src" => "/images/bright-food/products/paprika.png", "name" => "paprika", "category" => "vegetables", "price" => 30, "previousPrice" => 0],
            ["id" => 9, "src" => "/images/bright-food/products/peaches.png", "name" => "peaches", "category" => "fruit", "price" => 23, "previousPrice" => 28],
            ["id" => 10, "src" => "/images/bright-food/products/pineapple.png", "name" => "pineapple", "category" => "fruit", "price" => 50, "previousPrice" => 55],
            ["id" => 11, "src" => "/images/bright-food/products/tomatoes.png", "name" => "tomatoes", "category" => "vegetables", "price" => 100, "previousPrice" => 0]
        ]]);
});

$app->post('/email', function () use ($app) {
    $email = json_decode(file_get_contents('php://input'), true)['email'];
    $app['session']->set('email', $email);

    return json_encode(['status' => 'ok', 'email' => $email]);
});


$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    // 404.html, or 40x.html, or 4xx.html, or error.html
    $templates = array(
        'errors/'.$code.'.html.twig',
        'errors/'.substr($code, 0, 2).'x.html.twig',
        'errors/'.substr($code, 0, 1).'xx.html.twig',
        'errors/default.html.twig',
    );

    return new Response($app['twig']->resolveTemplate($templates)->render(array('code' => $code)), $code);
});
