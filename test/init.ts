/// <reference path="../typings/main.d.ts" />

import 'reflect-metadata'
import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/async-test.js'
import 'zone.js/dist/fake-async-test.js'
import 'rxjs'

import {setBaseTestProviders} from '@angular/core/testing'
import {TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS}
  from '@angular/platform-browser-dynamic/testing'

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS)
