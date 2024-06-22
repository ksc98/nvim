function Folder:linemode(area)
	local lines = {}
	for _, f in ipairs(self:by_kind(self.CURRENT).window) do
		if f:is_hovered() then
			-- You may want to change the "foreground color" here to adapt to your theme
			lines[#lines + 1] = ui.Line({ ui.Span(""):bg("reset"):fg("blue") })
			break
		else
			lines[#lines + 1] = ui.Line({})
		end
	end
	return ui.Paragraph(area, lines):align(ui.Alignment.RIGHT)
end
