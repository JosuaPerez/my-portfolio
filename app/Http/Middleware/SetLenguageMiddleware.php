<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLenguageMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->segment(1);
        app()->setLocale($locale);

        return $next($request);
    }
}
