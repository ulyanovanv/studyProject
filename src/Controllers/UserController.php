<?php namespace Controllers;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

/**
 * Created by PhpStorm.
 * User: ilya
 * Date: 18.08.17
 * Time: 17:25
 */
class UserController
{
    public function index(Application $app, Request $request)
    {
        if (null === $user = $app['session']->get('user')) {
            return $app->json(['status' => 'error', 'error' => 'no user in session']);
        }

        return $app->json([
            'status' => 'ok',
            'user' => $user
        ]);
    }

    /**
     * @param Application $app
     * @param Request $request
     * @return string
     */
    public function store(Application $app, Request $request)
    {
//        $user = [
//            'name' => $request->get('name'),
//            'surname' => $request->get('surname'),
//            'gender' => $request->get('gender'),
//            'age' => $request->get('age'),
//            'phonenumber' => $request->get('phonenumber'),
//            'email' => $request->get('email'),
//            'password' => $request->get('password'),
//            'repeatPassword' => $request->get('repeatPassword'),
//        ];
        $user = [
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => $request->get('password'),
            'confpassword' => $request->get('confpassword'),
            'birthdays' => $request->get('birthdays'),
            'smallers' => $request->get('smallers'),
            'shortstory' => $request->get('shortstory'),
        ];




        $errors = [];
//        if ($user['password'] !== $user['repeatPassword']) {
//            $errors[] = ['field' => 'password', 'message' => 'passwords don`t mach'];
//        }

        if ($errors) {
            return $app->json(['status' => 'error', 'errors' => $errors]);
        }

        $app['session']->set('user', $user);

        return $app->json(['status' => 'ok']);
    }
}