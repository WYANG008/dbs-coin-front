/**
 * 临时解决调试用的 proxy server
 *
 * @author weitao
 * @date 19/04/27
 */
'use strict'

const http = require('http')
const request = require('request')

http.createServer((req, res) => {
	const method = 
		req.method &&
		req.method.toUpperCase &&
		req.method.toUpperCase()
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	}
	for (const key in headers) {
		res.setHeader(key, headers[key])
	}
	if (method === 'OPTIONS') {
		// cors pre-req
		res.statusCode = 204
		return res.end()
	}

	let msg = ''
	req.on('data', (chunk) => {
		msg += chunk
	})
	req.on('end', () => {
		let proxyConfig
		try {
			proxyConfig = JSON.parse(msg)
		} catch (err) {
			res.statusCode = 400
			return res.end(JSON.stringify({
				status: 400,
				message: 'invalid params'
			}))
		}

		request({
			method: proxyConfig.method,
			url: proxyConfig.url,
			headers: proxyConfig.headers || {},
			qs: proxyConfig.qs || {},
			body: proxyConfig.body || {},
			json: true
		}, (err, response, body) => {
			res.statusCode = response.statusCode
			res.end(JSON.stringify(body))
		})
	})
}).listen(3000)

process.stdout.write('proxy server listening port 3000 \n')
