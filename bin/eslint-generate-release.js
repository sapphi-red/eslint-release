#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the eslint-generate-release command.
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const ReleaseOps = require("../lib/release-ops");

//------------------------------------------------------------------------------
// Execution
//------------------------------------------------------------------------------

/*
 * Usage:
 * $ eslint-generate-release
 */

ReleaseOps.generateRelease();
