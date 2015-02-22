function noop() {};
self = {};
document = {
	addEventListener: noop,
	createElement: function() {
		return {
			addEventListener: noop,
			width: 100, 
			height: 100, 
			getContext: function(){
				return {
					activeTexture: noop,
					attachShader: noop,
					bindAttribLocation: noop,
					bindBuffer: noop,
					bindFramebuffer: noop,
					bindRenderbuffer: noop,
					bindTexture: noop,
					blendColor: noop,
					blendEquation: noop,
					blendEquationSeparate: noop,
					blendFunc: noop,
					blendFuncSeparate: noop,
					bufferData: noop,
					bufferSubData: noop,
					checkFramebufferStatus: noop,
					clear: noop,
					clearColor: noop,
					clearDepth: noop,
					clearStencil: noop,
					colorMask: noop,
					compileShader: noop,
					compressedTexImage2D: noop,
					compressedTexSubImage2D: noop,
					copyTexImage2D: noop,
					copyTexSubImage2D: noop,
					createBuffer: noop,
					createFramebuffer: noop,
					createProgram: noop,
					createRenderbuffer: noop,
					createShader: noop,
					createTexture: noop,
					cullFace: noop,
					deleteBuffer: noop,
					deleteFramebuffer: noop,
					deleteProgram: noop,
					deleteRenderbuffer: noop,
					deleteShader: noop,
					deleteTexture: noop,
					depthFunc: noop,
					depthMask: noop,
					depthRange: noop,
					detachShader: noop,
					disable: noop,
					disableVertexAttribArray: noop,
					drawArrays: noop,
					drawArraysInstancedANGLE: noop,
					drawElements: noop,
					drawElementsInstancedANGLE: noop,
					enable: noop,
					enableVertexAttribArray: noop,
					framebufferRenderbuffer: noop,
					framebufferTexture2D: noop,
					frontFace: noop,
					generateMipmap: noop,
					getActiveAttrib: noop,
					getActiveUniform: noop,
					getAttachedShaders: noop,
					getAttribLocation: noop,
					getBufferParameter: noop,
					getContextAttributes: noop,
					getError: noop,
					getExtension: function () {
						return null;
					},
					getFramebufferAttachmentParameter: noop,
					getParameter: noop,
					getProgramInfoLog: function() {
						return '';
					},
					getProgramParameter: noop,
					getRenderbufferParameter: noop,
					getShaderInfoLog: function() {
						return '';
					},
					getShaderParameter: noop,
					getShaderPrecisionFormat: function() {
						return {
							precision: 0
						}
					},
					getShaderSource: noop,
					getSupportedExtensions: noop,
					getTexParameter: noop,
					getUniform: noop,
					getUniformLocation: noop,
					getVertexAttrib: noop,
					getVertexAttribOffset: noop,
					isBuffer: noop,
					isContextLost: noop,
					isEnabled: noop,
					isFramebuffer: noop,
					isProgram: noop,
					isRenderbuffer: noop,
					isShader: noop,
					isTexture: noop,
					lineWidth: noop,
					linkProgram: noop,
					pixelStorei: noop,
					polygonOffset: noop,
					readPixels: noop,
					renderbufferStorage: noop,
					sampleCoverage: noop,
					scissor: noop,
					shaderSource: noop,
					stencilFunc: noop,
					stencilFuncSeparate: noop,
					stencilMask: noop,
					stencilMaskSeparate: noop,
					stencilOp: noop,
					stencilOpSeparate: noop,
					texImage2D: noop,
					texParameterf: noop,
					texParameteri: noop,
					texSubImage2D: noop,
					uniform1f: noop,
					uniform1fv: noop,
					uniform1i: noop,
					uniform1iv: noop,
					uniform2f: noop,
					uniform2fv: noop,
					uniform2i: noop,
					uniform2iv: noop,
					uniform3f: noop,
					uniform3fv: noop,
					uniform3i: noop,
					uniform3iv: noop,
					uniform4f: noop,
					uniform4fv: noop,
					uniform4i: noop,
					uniform4iv: noop,
					uniformMatrix2fv: noop,
					uniformMatrix3fv: noop,
					uniformMatrix4fv: noop,
					useProgram: noop,
					validateProgram: noop,
					vertexAttribDivisorANGLE: noop,
					vertexAttribPointer: noop,
					viewport: noop
				};
			}
		}
	}
};